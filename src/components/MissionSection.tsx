import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-[#F3F7FD] transition-all duration-500 hover:bg-[#EBF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left: Title */}
          <div className="group">
            <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#1464B9] mb-6 transition-all duration-500 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105">
              Our Mission
            </h2>
          </div>
          {/* Right: Content */}
          <div className="group">
            <p className="text-xl md:text-2xl lg:text-[18px] text-[#6B7280] max-w-2xl leading-relaxed font-poppins transition-all duration-500 group-hover:text-[#4B5563] group-hover:transform group-hover:scale-105">
              To revolutionize the drug discovery process by integrating biology, chemistry,
              and artificial intelligence, delivering novel therapeutics to patients with
              speed, precision, and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};