import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResumeModal = () => setIsResumeModalOpen(true);
  const handleCloseResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={handleOpenResumeModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={handleOpenResumeModal} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </div>
  );
}
