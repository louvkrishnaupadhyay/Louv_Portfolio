import React from 'react';
import { Award, FileCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section className="py-20 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Award className="w-5 h-5" />
              <h3 className="font-bold text-white text-lg">Key Achievements</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong>400+ LeetCode Problems Solved:</strong> Arrays, DP, trees, graphs, heaps, DSU.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong>Adobe University Hackathon:</strong> Ranked Top 45 Teams out of 1 Lakh+ entries.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400">
              <FileCheck className="w-5 h-5" />
              <h3 className="font-bold text-white text-lg">Certifications</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{cert.title}</div>
                    <div className="text-xs text-slate-500">{cert.issuer}</div>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1">
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}