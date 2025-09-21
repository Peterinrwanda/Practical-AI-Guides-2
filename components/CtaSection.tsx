
import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <section className="mt-20 text-center max-w-3xl mx-auto py-12 px-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-white">Ready to Build the Future?</h2>
      <p className="mt-4 text-lg text-indigo-100 leading-relaxed">
        Now that you've seen what's possible with AI, are you ready to learn how to build the next generation of tools? Mastering AI application is the first step. The next is creation.
      </p>
      <a 
        href="https://www.ariseaiagency.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-white text-brand-primary font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-50"
      >
        Learn to Build AI: Explore Our Courses
      </a>
    </section>
  );
};
