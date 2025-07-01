import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { TherapeuticAreasSection } from './components/TherapeuticAreasSection';
import { PipelineSection } from './components/PipelineSection';
import { TechnologySection } from './components/TechnologySection';
import { ContactUsSection } from './components/ContactUsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <TherapeuticAreasSection />
      <PipelineSection />
      <TechnologySection/>
      <ContactUsSection/>
      <Footer/>
    </div>
  );
}

export default App;