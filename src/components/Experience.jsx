import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Experience</h2>
            </div>
            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">June – August</div>
                <h3 className="text-lg font-bold text-white">Tech Intern</h3>
                <div className="text-sm text-slate-400 mb-2">O3 Origin</div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Identified, analyzed, and fixed user interface bugs to enhance UX.</li>
                  <li>Curated and processed required dataset pipelines for site functionality.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
            </div>
            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">2024 – Expected 2028</div>
                <h3 className="text-lg font-bold text-white">{personalInfo.degree}</h3>
                <div className="text-sm text-slate-400 mb-1">{personalInfo.college}</div>
                <div className="text-xs text-cyan-400 font-mono">Current CPI: {personalInfo.cpi}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}