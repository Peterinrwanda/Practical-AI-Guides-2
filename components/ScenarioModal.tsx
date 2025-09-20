import React from 'react';
import type { Scenario, Tool } from '../types';

interface ScenarioModalProps {
  scenario: Scenario;
  onClose: () => void;
}

const parseDescriptionWithToolLinks = (description: string, tools: Tool[]): React.ReactNode[] => {
  if (!tools || tools.length === 0) {
    return [description];
  }
  
  const sortedTools = [...tools].sort((a, b) => b.name.length - a.name.length);

  const toolNamesPattern = sortedTools.map(tool =>
    tool.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  ).join('|');

  if (!toolNamesPattern) {
    return [description];
  }
  
  const regex = new RegExp(`(${toolNamesPattern})`, 'g');
  const parts = description.split(regex);

  return parts.map((part, index) => {
    const matchingTool = sortedTools.find(tool => tool.name === part);
    if (matchingTool) {
      return (
        <a 
          key={`${matchingTool.name}-${index}`}
          href={matchingTool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-primary hover:underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};


export const ScenarioModal: React.FC<ScenarioModalProps> = ({ scenario, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-6 border-b border-gray-200/80 flex justify-between items-center sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-brand-dark">{scenario.title}</h2>
          <button 
            onClick={onClose} 
            className="text-brand-muted hover:text-brand-dark transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="p-8 overflow-y-auto">
          <section className="mb-8">
            <h3 className="text-sm font-semibold text-brand-secondary tracking-wide uppercase mb-2">Goal</h3>
            <p className="text-lg text-brand-muted">{scenario.goal}</p>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-semibold text-brand-secondary tracking-wide uppercase mb-4">The AI Workflow</h3>
            <div className="space-y-6 border-l-2 border-brand-primary/20 pl-6">
              {scenario.workflow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-brand-primary ring-4 ring-white"></div>
                  <h4 className="font-bold text-brand-dark text-lg">{step.title}</h4>
                  <p className="text-brand-muted mt-1">{parseDescriptionWithToolLinks(step.description, scenario.tools)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-brand-secondary tracking-wide uppercase mb-3">Tools in this Workflow</h3>
            <div className="flex flex-wrap gap-3">
              {scenario.tools.map(tool => (
                <a 
                  key={tool.name} 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-light text-brand-primary font-semibold px-4 py-2 rounded-full hover:bg-brand-primary/20 transition-colors"
                >
                  {tool.name} &rarr;
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};