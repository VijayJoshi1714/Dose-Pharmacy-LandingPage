import React from 'react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <img
          src="/images/herobg.png"
          alt="Scientist in laboratory"
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Mobile Background */}
        <img
          src="/images/herobgsm.png"
          alt="Scientist in laboratory"
          className="block md:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black-600"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center top-24 lg:top-12 px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-medium text-white mb-8 lg:leading-[1.15] font-inter">
          <span className="block text-white">Accelerating Breakthroughs</span> 
          <span className="block">in Drug Discovery</span>
        </h1>

        {/* Subtitle */}
        <p className="text-l lg:text-xl md:text-xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
          Transforming how new medicines are discovered through deep science, 
          advanced technology, and artificial intelligence
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('pipeline')}
            className="bg-soft-white border-2 hover:border-white text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-healing-blue transition-colors min-w-[200px] font-poppins"
          >
            Our Pipeline
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-vitality-amber hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors min-w-[200px] font-poppins"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};