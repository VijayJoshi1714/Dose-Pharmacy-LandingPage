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
        className='w-10 h-10 object-contain'
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
        className='w-10 h-10 object-contain'
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
        className='w-10 h-10 object-contain'
      />
    ),
  },
];

export const TechnologySection: React.FC = () => (
  <section id="technology" className='min-h-screen flex items-center justify-center bg-white'>
    <div className='w-full max-w-5xl mx-auto px-2 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold mb-3 font-inter text-[#1464B9]'>
        AI-Powered Drug Discovery
      </h2>
      <p className='text-lg text-[#6B7280] mb-6 font-poppins'>
        We bridge molecular innovation and real-world impact through:
      </p><br /><br />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full'>
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className='bg-white rounded-lg border-2 border-[#E5E7EB] flex flex-col items-center shadow-none hover:shadow-xl transition-shadow duration-200 mx-auto h-full min-h-[320px] p-6'
          >
            <div className='mb-4'>{pillar.icon}</div>
            <h3 className='text-xl font-bold text-[#1464B9] mb-2 font-inter text-center'>
              {pillar.title}
            </h3>
            <br />
            <p className='text-[#6B7280] text-base font-poppins text-center'>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);