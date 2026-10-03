import React from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-8">
          <User className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
            <p>
              I am a Computer Science Engineering student graduating in {personalInfo.gradYear} at <strong>{personalInfo.college}</strong> with a CPI of {personalInfo.cpi}. I combine strong theoretical computer science principles with practical web development skills.
            </p>
            <p>
              My expertise spans across data structures, algorithm optimization, and full-stack development using the MERN stack. I thrive in competitive environments—demonstrated by solving over <strong>400+ LeetCode problems</strong> in C++ and placing in the <strong>Top 45 out of 1 Lakh+ teams</strong> in the Adobe University Hackathon.
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
            <h3 className="text-sm font-semibold font-mono text-cyan-400 uppercase tracking-wider">Quick Info</h3>
            <ul className="text-sm space-y-2 text-slate-300">
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Degree:</span>
                <span>B.Tech CSE (2024-2028)</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500">LeetCode:</span>
                <span className="font-mono text-cyan-400">{personalInfo.leetcodeSolved} Solved</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}