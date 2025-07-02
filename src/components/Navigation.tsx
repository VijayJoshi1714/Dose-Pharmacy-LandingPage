import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Research areas', id: 'therapeutic-areas' },
    { label: 'Pipeline', id: 'pipeline' },
    { label: 'Technology', id: 'technology' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-soft-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <img
              src="/logo.png"
              alt="VASI Pharma"
              className="h-[8pc] w-auto cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-900 text-md font-medium font-poppins hover:text-[#1464B9] transition-all duration-300 transform hover:scale-110 hover:font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#1464B9] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-vitality-amber hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium font-poppins transition-all duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 hover:bg-orange-500"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-[#1464B9] transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-soft-white border-t border-gray-200 transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-900 font-medium font-poppins hover:text-[#1464B9] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-vitality-amber hover:bg-orange-600 text-white font-medium font-poppins rounded-md mt-2 transition-all duration-300 transform hover:scale-105"
              >
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};