import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const words = ["Software Development Student", "Full-Stack MERN Developer", "DSA & C++ Enthusiast", "Hackathon Top 45 Finisher"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Available for Software Internships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Louv Krishna</span>
            </h1>

            <p className="text-xl font-mono text-slate-400">
              &gt; <span className="text-slate-200 font-semibold">{text}</span><span className="animate-pulse">|</span>
            </p>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Computer Science Engineering student at <strong className="text-slate-200">IIIT Senapati, Manipur</strong> with a passion for high-performance backend systems, real-time web applications, and algorithmic problem-solving.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg border-y border-slate-800/80 py-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono">{personalInfo.leetcodeSolved}</div>
                <div className="text-xs text-slate-400">LeetCode Solved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-mono">{personalInfo.hackathonRank}</div>
                <div className="text-xs text-slate-400">Adobe Hackathon</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">{personalInfo.cpi}</div>
                <div className="text-xs text-slate-400">Current CPI</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all flex items-center space-x-2">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-colors flex items-center space-x-2 bg-slate-900/50">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 shadow-2xl glow-effect">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-500">developer.cpp</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto space-y-1"><code><span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;iostream&gt;</span>
<span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;vector&gt;</span>

<span className="text-blue-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123;
<span className="text-blue-400">public</span>:
    std::string name = <span className="text-emerald-300">"{personalInfo.name}"</span>;
    std::string college = <span class="text-emerald-300">"IIIT Manipur"</span>;
    <span className="text-blue-400">int</span> gradYear = <span className="text-orange-400">2028</span>;
    
    std::vector&lt;std::string&gt; stack = &#123;
        <span className="text-emerald-300">"C++"</span>, <span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Node.js"</span>
    &#125;;
&#125;;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}