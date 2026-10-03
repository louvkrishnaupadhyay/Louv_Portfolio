import React from 'react';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-8">
          <FolderGit2 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-all">
              <div className="p-6 flex-grow space-y-3">
                <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">{proj.tech}</span>
                <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{proj.description}</p>
                <ul className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  {proj.points.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 flex items-center space-x-1">
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
                {proj.liveDemo ? (
                  <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="text-slate-600">Full-Stack</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}