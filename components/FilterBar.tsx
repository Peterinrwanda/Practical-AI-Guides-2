
import React from 'react';

interface FilterBarProps {
  label: string;
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ label, filters, activeFilter, setActiveFilter }) => {
  return (
    <div>
      <h3 className="text-md font-semibold text-brand-muted mb-3 text-center sm:text-left">{label}:</h3>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary ${
              activeFilter === filter
                ? 'bg-brand-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
