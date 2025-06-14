'use client';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
// Import ExperienceSection and ContactSection when you create them

const MainContent = () => {
  return (
    <main className="ml-64 flex-1 p-8 md:p-12 overflow-y-auto">
      {/* 
        Each section below will have an 'id' corresponding to 'sectionId' in Sidebar navItems 
        for smooth scrolling.
      */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
};

export default MainContent;
