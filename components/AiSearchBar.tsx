import React, { useState } from 'react';

interface AiSearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const AiSearchBar: React.FC<AiSearchBarProps> = ({ onSearch, isLoading, error }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'Create a social media campaign from a video'"
          className="flex-grow px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
          disabled={isLoading}
          aria-label="AI Search Input"
        />
        <button
          type="submit"
          className="bg-brand-secondary hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
          aria-live="polite"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Searching...</span>
            </>
          ) : '✨ Ask AI'}
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};