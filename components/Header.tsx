
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-600">
        Work Smarter, Not Harder: Your Ultimate AI Toolkit
      </h1>
      <p className="mt-6 text-lg md:text-xl text-brand-muted leading-relaxed">
        Forget dense theory. This is your practical guide to using AI in the real world. We've curated the best guides, prompt collections, and use-cases to help you integrate powerful AI tools like ChatGPT, Midjourney, and NotebookLM into your daily workflow, no matter your profession.
      </p>
    </header>
  );
};