import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { AiSearchBar } from './components/AiSearchBar';
import { ResourceList } from './components/ResourceList';
import { CtaSection } from './components/CtaSection';
import { ScenarioModal } from './components/ScenarioModal';
import { ALL_SCENARIOS } from './data';
import { USE_CASES, AUDIENCES, TOOLS } from './constants';
import type { Scenario } from './types';
import { GoogleGenAI, Type } from "@google/genai";

const App: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<string>('All');
  const [activeTool, setActiveTool] = useState<string>('All');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const [aiSearchResults, setAiSearchResults] = useState<string[]>([]);
  const [isAiSearchActive, setIsAiSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setAiError(null);
    setActiveUseCase('All');
    setActiveTool('All');
    
    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const scenariosForPrompt = ALL_SCENARIOS.map(({ id, title, goal }) => ({ id, title, goal }));
      
      const prompt = `You are an expert assistant for the "Practical AI Guide & Toolkit". Your task is to help users find the most relevant workflow scenarios based on their goals.

I will provide you with a user's query and a list of all available scenarios in JSON format. Each scenario has an 'id', 'title', and 'goal'.

Analyze the user's query and determine their intent. Then, find the most relevant scenarios from the list that match the user's intent.

You MUST return a JSON object with a single key "scenarioIds", which is an array of the 'id's of the matching scenarios, ordered from most to least relevant. Do not return more than 5 results. If you cannot find any relevant scenarios, return an empty array for "scenarioIds".

User Query: "${query}"

Available Scenarios:
${JSON.stringify(scenariosForPrompt)}
`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              scenarioIds: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
            },
            required: ['scenarioIds']
          },
        },
      });

      const result = JSON.parse(response.text);
      setAiSearchResults(result.scenarioIds || []);
      setIsAiSearchActive(true);

    } catch (error) {
      console.error("Gemini API call failed:", error);
      setAiError("Sorry, the AI search isn't working right now. Please try again later or use the filters.");
      setIsAiSearchActive(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (filter: string) => {
    setIsAiSearchActive(false);
    setAiSearchResults([]);
    setter(filter);
  };

  const filteredScenarios = useMemo<Scenario[]>(() => {
    if (isAiSearchActive) {
      return aiSearchResults
        .map(id => ALL_SCENARIOS.find(s => s.id === id))
        .filter((s): s is Scenario => s !== undefined);
    }
    
    return ALL_SCENARIOS.filter(scenario => {
      const useCaseMatch = activeUseCase === 'All' || scenario.useCase === activeUseCase;
      const toolMatch = activeTool === 'All' || scenario.tools.some(tool => tool.name === activeTool);
      return useCaseMatch && toolMatch;
    });
  }, [isAiSearchActive, aiSearchResults, activeUseCase, activeTool]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-brand-dark">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Header />
        
        <div className="mt-12 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-200/80">
          <p className="text-center text-lg font-medium text-brand-muted mb-6">
            Find the right tool for your task. Describe your goal or use the filters below to sort resources.
          </p>
          <AiSearchBar onSearch={handleSearch} isLoading={isLoading} error={aiError} />
          <div className="space-y-8 mt-8">
            <FilterBar
              label="Filter by Use-Case"
              filters={['All', ...USE_CASES]}
              activeFilter={activeUseCase}
              setActiveFilter={handleFilterChange(setActiveUseCase)}
            />
            <FilterBar
              label="Filter by Tool"
              filters={['All', ...TOOLS]}
              activeFilter={activeTool}
              setActiveFilter={handleFilterChange(setActiveTool)}
            />
          </div>
        </div>

        <ResourceList scenarios={filteredScenarios} onCardClick={setSelectedScenario} isAiSearch={isAiSearchActive} />
        
        <CtaSection />
      </main>
      
      {selectedScenario && (
        <ScenarioModal 
          scenario={selectedScenario} 
          onClose={() => setSelectedScenario(null)} 
        />
      )}
    </div>
  );
};

export default App;