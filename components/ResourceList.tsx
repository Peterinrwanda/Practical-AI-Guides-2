import React from 'react';
import type { Scenario } from '../types';
import { ResourceCard } from './ResourceCard';

interface ResourceListProps {
  scenarios: Scenario[];
  onCardClick: (scenario: Scenario) => void;
  isAiSearch: boolean;
}

export const ResourceList: React.FC<ResourceListProps> = ({ scenarios, onCardClick, isAiSearch }) => {
  return (
    <section className="mt-16">
      {scenarios.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <ResourceCard key={scenario.id} scenario={scenario} onClick={onCardClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-white rounded-2xl shadow-lg border border-gray-200/80">
            <h3 className="text-2xl font-bold text-brand-dark">
              {isAiSearch ? 'No relevant workflows found by AI' : 'No Resources Found'}
            </h3>
            <p className="mt-2 text-lg text-brand-muted">
              {isAiSearch ? 'Try rephrasing your search or use the filters below.' : 'Try adjusting your filters to discover more great content!'}
            </p>
        </div>
      )}
    </section>
  );
};