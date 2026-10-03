import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold font-mono tracking-tight text-cyan-400 hover:text-cyan-300 transition-colors">
          &lt;LouvKrishna /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#terminal" className="hover:text-cyan-400 transition-colors">Terminal</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#contact" className="px-4 py-2 text-xs font-semibold font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-colors">
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">Experience</a>
          <a href="#terminal" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">Terminal</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 text-base font-medium">Contact</a>
        </div>
      )}
    </header>
  );
}
