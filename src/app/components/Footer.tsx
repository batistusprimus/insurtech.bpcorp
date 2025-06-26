"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#10B981]/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-primary)]/60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>© {new Date().getFullYear()} BP LES CANNISSENT KFT</span>
            <span className="hidden md:inline">•</span>
            <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
            <span className="hidden md:inline">•</span>
            <a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Conforme RGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 