import React from 'react';

export const TherapeuticAreasSection: React.FC = () => {
  const therapeuticAreas = [
    {
      title: "Oncology – Triple Negative Breast & Prostate Cancer",
      description: "Pursuing next-generation therapies to tackle aggressive and treatment-resistant cancers through precision medicine and molecular targeting."
    },
    {
      title: "Neurodegeneration – Alzheimer's and Dementia",
      description: "Advancing novel diagnostics and disease-modifying treatments to slow progression and improve outcomes in aging-related cognitive disorders."
    },
    {
      title: "Autoimmune Diseases – Multiple Sclerosis & More",
      description: "Innovating immune-modulating therapies to restore balance and reduce disease burden in complex, chronic autoimmune conditions."
    },
    {
      title: "Rare Genetic Disorders – Innovative Solutions",
      description: "Leveraging cutting-edge genetic technologies to diagnose, understand, and treat rare conditions with high unmet medical need."
    }
  ];

  return (
    <section id="therapeutic-areas" className="min-h-screen py-24 bg-soft-white flex items-center transition-all duration-500 hover:bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Top Title */}
          <div className="self-start group">
            <h3 className="text-lg font-medium text-[#2563EB] mb-4 font-poppins tracking-wider uppercase transition-all duration-300 group-hover:text-[#1d4ed8] group-hover:transform group-hover:scale-105">
              THERAPEUTIC AREAS
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB] leading-tight font-inter transition-all duration-500 group-hover:text-[#1d4ed8] group-hover:transform group-hover:scale-105">
              Transforming Lives Across Critical Health Areas
            </h2>
            <br /><br />
            <p className="text-xl md:text-2xl lg:text-[18px] text-[#6B7280] max-w-2xl leading-relaxed font-poppins transition-all duration-500 group-hover:text-[#4B5563] group-hover:transform group-hover:scale-105">
              We are pioneering treatments for diseases with the<br /> greatest unmet needs, focusing on improving patient<br /> outcomes through innovative and targeted therapies.
              <br />By addressing some of the most complex and challenging health conditions, we aim to transform lives and deliver meaningful advances in care.
            </p>
          </div>
          {/* Right - Cards Grid */}
          <div className="grid grid-cols-1 gap-14 lg:gap-x-14 lg:gap-y-4 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:grid-flow-col">
            {[0, 2, 1, 3].map((i) => (
              <div
                key={i}
                className="group transition-all lg:ml-[-60px] duration-300 hover:shadow-2xl p-5 sm:p-7 flex flex-col gap-4 justify-center h-full bg-white border-2 border-[#E5E7EB] w-[300px] max-w-2xl mx-auto hover:border-[#1464B9] hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon Accent */}
                <span className="mb-2 transition-all duration-300 group-hover:transform group-hover:scale-110">
                  {i === 0 && (
                    <img src="/images/Cancer.png" alt="Oncology Icon" className="w-10 h-10 object-contain transition-all duration-300 group-hover:drop-shadow-lg" />
                  )}
                  {i === 1 && (
                    <img src="/images/Neurodegeneration.png" alt="Neurodegeneration Icon" className="w-10 h-10 object-contain transition-all duration-300 group-hover:drop-shadow-lg" />
                  )}
                  {i === 2 && (
                    <img src="/images/Autoimmune.png" alt="Autoimmune Icon" className="w-10 h-10 object-contain transition-all duration-300 group-hover:drop-shadow-lg" />
                  )}
                  {i === 3 && (
                    <img src="/images/Genetic.png" alt="Genetic Disorders Icon" className="w-10 h-10 object-contain transition-all duration-300 group-hover:drop-shadow-lg" />
                  )}
                </span>
                <h3 className="text-lg font-semibold font-inter text-[#1464B9] transition-all duration-300 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105">
                  {therapeuticAreas[i].title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed font-poppins transition-all duration-300 group-hover:text-[#4B5563]">
                  {therapeuticAreas[i].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};