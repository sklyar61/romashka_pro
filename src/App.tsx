import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
