import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { TeachersSection } from './components/TeachersSection';
import { PpdbSection } from './components/PpdbSection';
import { CampusFacilities } from './components/CampusFacilities';
import { Extracurriculars } from './components/Extracurriculars';
import { Testimonials } from './components/Testimonials';
import { AgendaNews } from './components/AgendaNews';
import { FaqContact } from './components/FaqContact';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedPpdbProgram, setPreselectedPpdbProgram] = useState<string | undefined>();

  const handleOpenPpdb = (programTitle?: string) => {
    if (programTitle) {
      setPreselectedPpdbProgram(programTitle);
    }
    const ppdbElement = document.getElementById('ppdb');
    if (ppdbElement) {
      ppdbElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePrograms = () => {
    const programElement = document.getElementById('program');
    if (programElement) {
      programElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-[#7cb342]/20 selection:text-emerald-950">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenPpdb={() => handleOpenPpdb()}
      />

      <main>
        {/* Hero Section matching reference style */}
        <Hero
          onOpenPpdb={() => handleOpenPpdb()}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* Featured Programs Section (matching top course cards from reference) */}
        <ProgramsSection
          onSelectProgramForPpdb={(progTitle) => handleOpenPpdb(progTitle)}
        />

        {/* Teachers & Faculty Section (Our Experts Teacher) */}
        <TeachersSection />

        {/* PPDB Online Wizard & Status Checker */}
        <PpdbSection preselectedProgram={preselectedPpdbProgram} />

        {/* Facilities & Campus Showcase */}
        <CampusFacilities />

        {/* Extracurriculars & Club Activities */}
        <Extracurriculars />

        {/* Testimonials ("Every Student Matters" / Practice Advice) */}
        <Testimonials />

        {/* Agenda Akademik & School News */}
        <AgendaNews />

        {/* FAQ & Contact Information */}
        <FaqContact />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
