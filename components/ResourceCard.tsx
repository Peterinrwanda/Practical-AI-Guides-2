import React from 'react';
import type { Scenario } from '../types';

interface ResourceCardProps {
  scenario: Scenario;
  onClick: (scenario: Scenario) => void;
}

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
    {text}
  </span>
);

export const ResourceCard: React.FC<ResourceCardProps> = ({ scenario, onClick }) => {
  const allTags = [scenario.useCase, ...scenario.primaryAudience];

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200/80 flex flex-col h-full overflow-hidden">
      <div className="p-6 flex-grow">
        <div className="mb-4">
          <p className="text-sm font-semibold text-brand-secondary tracking-wide uppercase">
            Tool(s):{' '}
            {scenario.tools.map((tool, index) => (
              <React.Fragment key={tool.name}>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {tool.name}
                </a>
                {index < scenario.tools.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
          <h3 className="text-xl font-bold text-brand-dark mt-1">
            {scenario.title}
          </h3>
        </div>
        
        <div className="mb-4">
          {allTags.map(tag => <Tag key={tag} text={tag} />)}
        </div>

        <p className="text-brand-muted mb-4 text-base leading-relaxed">
          <span className="font-semibold text-gray-700">Goal:</span> {scenario.goal}
        </p>
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200/80">
        <button 
          onClick={() => onClick(scenario)}
          className="group inline-flex items-center font-bold text-brand-primary hover:text-brand-secondary transition-colors duration-200"
        >
          <span>▶ View Resource</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};