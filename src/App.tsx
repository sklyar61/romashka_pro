import React from 'react';
import FullPageContainer from './components/FullPageContainer';
import HeroSlide from './components/HeroSection';
import ServiceSlides from './components/ServiceSlide';
import ProjectsSlides from './components/ProjectsSection';
import AgentsSlide from './components/AgentsSlide';
import AboutSlide from './components/AboutSlide';

function App() {
  return (
    <FullPageContainer>
      <HeroSlide />
      <ServiceSlides />
      <ProjectsSlides />
      <AgentsSlide />
      <AboutSlide />
    </FullPageContainer>
  );
}

export default App;
