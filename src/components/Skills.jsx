import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'core', label: 'Core CS' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-8">
          <Code className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Technical Skills</h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="text-sm font-semibold text-white">{skill.name}</div>
              <div className="text-xs text-cyan-400 font-mono mt-1">{skill.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}