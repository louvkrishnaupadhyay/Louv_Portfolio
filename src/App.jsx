import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative text-white">
      {/* 3D Canvas Background */}
      <ParticleBackground />

      {/* Very light 25% tint + subtle blur to keep swarm super bright */}
      <div className="fixed inset-0 bg-black/25 backdrop-blur-[1px] -z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Terminal />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}