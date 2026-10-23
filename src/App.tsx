import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CloudPilotSection } from './components/CloudPilotSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProblemSolvingSection } from './components/ProblemSolvingSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-[#08090B] text-[#F5F5F7] min-h-screen selection:bg-[#6EA8FE]/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <CloudPilotSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ProblemSolvingSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
