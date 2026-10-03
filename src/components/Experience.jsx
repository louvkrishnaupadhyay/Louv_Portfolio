import React from 'react';

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Experience Card - Lighter Semi-Transparent Dark Glass */}
        <div className="bg-slate-950/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/40 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-cyan-400 text-2xl">💼</span>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="relative pl-6 border-l-2 border-cyan-500/50 space-y-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-slate-950" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                June – August
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Tech Intern</h3>
              <p className="text-slate-300 text-sm font-medium mb-3">O3 Origin</p>
              <ul className="list-disc list-inside text-slate-200 text-sm space-y-2">
                <li>Identified, analyzed, and fixed user interface bugs to enhance UX.</li>
                <li>Curated and processed required dataset pipelines for site functionality.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Card - Lighter Semi-Transparent Dark Glass */}
        <div className="bg-slate-950/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/40 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-cyan-400 text-2xl">🎓</span>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="relative pl-6 border-l-2 border-cyan-500/50 space-y-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-slate-950" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                2024 – Expected 2028
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                B.Tech. in Computer Science and Engineering
              </h3>
              <p className="text-slate-300 text-sm font-medium">
                Indian Institute of Information Technology Senapati, Manipur
              </p>
              <p className="text-cyan-400 font-mono text-sm mt-2">
                Current CPI: 7.99
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}