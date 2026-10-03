import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'text', content: "Welcome to Louv Krishna's Portfolio Terminal v1.0.0" },
    { type: 'text', content: "Type 'help' to view available commands." }
  ]);
  const [input, setInput] = useState('');

  const commands = {
    help: "Available commands:\n - about: Quick profile summary\n - skills: Key technical skill highlights\n - contact: Reach out via email/LinkedIn\n - leetcode: DSA problem-solving status\n - clear: Clear the terminal console",
    about: `${personalInfo.name} | CSE Student @ IIIT Manipur (Grad ${personalInfo.gradYear}). Full-Stack MERN Developer.`,
    skills: "C++, Python, JS, React.js, Node.js, Express, MongoDB, Socket.IO, WebRTC, REST APIs, Git, DBMS, OS, Networks.",
    contact: `Email: ${personalInfo.email} | Mobile: ${personalInfo.phone} | LinkedIn: ${personalInfo.linkedin}`,
    leetcode: "400+ LeetCode problems solved in C++ focusing on DP, Graphs, DSU, Trees, and Stack/Queue patterns."
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
    } else if (commands[cmd]) {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', content: cmd },
        { type: 'res', content: commands[cmd] }
      ]);
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', content: cmd },
        { type: 'err', content: `Command not recognized: '${cmd}'. Type 'help' for options.` }
      ]);
    }
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-6">
          <TerminalIcon className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Interactive Terminal</h2>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <span className="text-xs font-mono text-slate-400">bash - louv@iiit-manipur:~</span>
            <span className="text-xs font-mono text-slate-500">Type 'help'</span>
          </div>

          <div className="p-4 font-mono text-xs sm:text-sm h-64 overflow-y-auto terminal-scroll space-y-2 text-slate-300">
            {history.map((item, index) => (
              <div key={index}>
                {item.type === 'cmd' && <span className="text-cyan-400">&gt; {item.content}</span>}
                {item.type === 'res' && <div className="text-slate-300 pl-2 whitespace-pre-line">{item.content}</div>}
                {item.type === 'err' && <div className="text-red-400 pl-2">{item.content}</div>}
                {item.type === 'text' && <div>{item.content}</div>}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-950 p-2 flex items-center border-t border-slate-800">
            <span className="text-cyan-400 font-mono text-sm px-2">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-slate-200 focus:outline-none placeholder-slate-600"
              placeholder="Type a command (help, skills, contact)..."
            />
          </form>
        </div>
      </div>
    </section>
  );
}