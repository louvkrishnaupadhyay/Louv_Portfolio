import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500 font-mono">
      <p>© 2026 {personalInfo.name}. Built with React, Tailwind CSS, & Lucide Icons.</p>
    </footer>
  );
}