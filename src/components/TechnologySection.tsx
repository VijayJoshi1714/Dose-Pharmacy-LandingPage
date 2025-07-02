import React from 'react';

const pillars = [
  {
    title: 'Biology',
    description:
      'Unlock the secrets of life to improve health, biodiversity, and innovative solutions.',
    icon: (
      <img
        src='/images/Biology.png'
        alt='Biology Icon'
        className='w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg'
      />
    ),
  },
  {
    title: 'Chemistry',
    description:
      'Transform materials and processes through precise molecular design for breakthroughs in medicine, technology, and sustainability.',
    icon: (
      <img
        src='/images/Chemistry.png'
        alt='Chemistry Icon'
        className='w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg'
      />
    ),
  },
  {
    title: 'Artificial Intelligence',
    description:
      'AI speeds up discoveries by analyzing data and finding patterns to drive innovation across all fields.',
    icon: (
      <img
        src='/images/AI.png'
        alt='AI Icon'
        className='w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg'
      />
    ),
  },
];

export const TechnologySection: React.FC = () => (
  <section id="technology" className='min-h-screen flex items-center justify-center bg-white transition-all duration-500 hover:bg-gray-50'>
    <div className='w-full max-w-5xl mx-auto px-2 text-center'>
      <div className="group mb-8">
        <h2 className='text-3xl md:text-4xl font-bold mb-3 font-inter text-[#1464B9] transition-all duration-500 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105'>
          AI-Powered Drug Discovery
        </h2>
        <p className='text-lg text-[#6B7280] mb-6 font-poppins transition-all duration-300 group-hover:text-[#4B5563] group-hover:transform group-hover:scale-105'>
          We bridge molecular innovation and real-world impact through:
        </p>
      </div>
      <br /><br />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full'>
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className='group bg-white rounded-lg border-2 border-[#E5E7EB] flex flex-col items-center shadow-none hover:shadow-2xl transition-all duration-300 mx-auto h-full min-h-[320px] p-6 hover:border-[#1464B9] hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative
            before:absolute before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-4 before:border-r-4 before:border-t-[#1464B9] before:border-r-[#1464B9] before:transition-all before:duration-300 before:opacity-0
            after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-t-4 after:border-r-4 before:border-t-transparent after:border-r-transparent after:transition-all after:duration-300
            hover:before:w-1/2 hover:before:h-1/2 hover:before:opacity-100 hover:before:shadow-lg
            hover:after:w-1/2 hover:after:h-1/2 hover:after:border-t-[#0f4c8c] hover:after:border-r-[#0f4c8c] hover:after:shadow-xl'
          >
            <div className='mb-4 transition-all duration-300 group-hover:transform group-hover:scale-110'>{pillar.icon}</div>
            <h3 className='text-xl font-bold text-[#1464B9] mb-2 font-inter text-center transition-all duration-300 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105'>
              {pillar.title}
            </h3>
            <br />
            <p className='text-[#6B7280] text-base font-poppins text-center transition-all duration-300 group-hover:text-[#4B5563]'>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);