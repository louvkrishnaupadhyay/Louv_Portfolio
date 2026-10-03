import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Let's Connect & Build Together</h2>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a href={`mailto:${personalInfo.email}`} className="p-4 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl flex items-center space-x-3 transition-all text-slate-200">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono">{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="p-4 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl flex items-center space-x-3 transition-all text-slate-200">
            <Phone className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono">{personalInfo.phone}</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl flex items-center space-x-3 transition-all text-slate-200">
            <Linkedin className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}