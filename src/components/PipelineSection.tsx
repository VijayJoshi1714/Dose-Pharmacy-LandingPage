import React from 'react';

interface PipelineProgram {
  id: string;
  name: string;
  code: string;
  currentPhase: string;
  stageIndex: number;
  color: string;
}

const pipelinePrograms: PipelineProgram[] = [
  {
    id: 'tnbc',
    name: 'Triple Negative Breast Cancer',
    code: 'RSC2216',
    currentPhase: 'Lead Optimization',
    stageIndex: 2,
    color: '#FFEB3B' // Yellow
  },
  {
    id: 'alzheimers',
    name: 'Alzheimer\'s',
    code: 'RSC6XXX',
    currentPhase: 'Lead Optimization',
    stageIndex: 2,
    color: '#FF9800' // Orange
  },
  {
    id: 'prostate',
    name: 'Prostate Cancer',
    code: 'RSC22XX',
    currentPhase: 'Lead Optimization',
    stageIndex: 2,
    color: '#FFEB3B' // Yellow
  },
  {
    id: 'ms',
    name: 'Multiple Sclerosis',
    code: 'Discovery',
    currentPhase: 'Discovery',
    stageIndex: 1,
    color: '#81C784' // Light Blue/Green
  }
];

const stages = [
  { id: 'program', label: 'Program', bgColor: '#E8F5E8' },
  { id: 'discovery', label: 'Discovery', bgColor: '#E8F5E8' },
  { id: 'lead-optimization', label: 'Lead Optimization', bgColor: '#E8F5E8' },
  { id: 'preclinical', label: 'Preclinical', bgColor: '#E8F5E8' },
  { id: 'phase1', label: 'Phase I', bgColor: '#E8F5E8' },
  { id: 'phase2', label: 'Phase II', bgColor: '#E8F5E8' },
  { id: 'phase3', label: 'Phase III', bgColor: '#E8F5E8' },
  { id: 'approval', label: 'Approval', bgColor: '#E8F5E8' }
];

const ArrowProgress: React.FC<{ 
  program: PipelineProgram;
}> = ({ program }) => {
  const getArrowWidth = () => {
    if (program.stageIndex === 1) return 'w-[80px] sm:w-[120px]'; // Discovery only
    if (program.stageIndex === 2) return 'w-[160px] sm:w-[240px]'; // Discovery + Lead Optimization
    return 'w-[240px] sm:w-[360px]'; // Longer for other phases
  };

  return (
    <div className="flex items-center group">
      <div className={`relative ${getArrowWidth()} h-8 sm:h-12 transition-all duration-300 group-hover:transform group-hover:scale-110`}>
        <svg
          viewBox="0 0 300 48"
          className="w-full h-full transition-all duration-300 group-hover:drop-shadow-lg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`gradient-${program.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={program.color} />
              <stop offset="100%" stopColor={program.color} />
            </linearGradient>
          </defs>
          <path
            d="M0,8 L260,8 L290,24 L260,40 L0,40 Z"
            fill={`url(#gradient-${program.id})`}
            stroke="#333"
            strokeWidth="2"
            className="transition-all duration-300 group-hover:stroke-[3]"
          />
          <text
            x="130"
            y="28"
            textAnchor="middle"
            className="fill-black font-bold text-xs sm:text-sm transition-all duration-300 group-hover:fill-blue-800"
            style={{ fontSize: '12px' }}
          >
            {program.code}
          </text>
        </svg>
      </div>
    </div>
  );
};

export const PipelineSection: React.FC = () => {
  return (
    <section id="pipeline" className="min-h-screen py-20 bg-white flex items-center transition-all duration-500 hover:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1464B9] leading-tight font-inter mb-6 transition-all duration-500 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105">
            Our Innovation Pipeline
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto font-poppins transition-all duration-300 group-hover:text-[#4B5563] group-hover:transform group-hover:scale-105">
            Leading the future of precision medicine
          </p>
        </div>

        {/* Pipeline Table - Desktop */}
        <div className="hidden lg:block bg-white border-2 border-gray-400 overflow-hidden max-w-5xl mx-auto transition-all duration-300 hover:shadow-xl hover:border-[#1464B9]">
          {/* Table Header */}
          <div className="grid grid-cols-8 border-b-2 border-gray-400">
            {stages.map((stage, index) => (
              <div 
                key={stage.id} 
                className="p-4 text-center border-r-2 border-gray-400 last:border-r-0 transition-all duration-300 hover:bg-[#dbeafe] group"
                style={{ backgroundColor: stage.bgColor }}
              >
                <span className="font-bold text-blue-700 text-sm transition-all duration-300 group-hover:text-blue-900 group-hover:transform group-hover:scale-110">
                  {stage.label}
                </span>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="bg-white">
            {pipelinePrograms.map((program, programIndex) => (
              <div 
                key={program.id} 
                className={`grid grid-cols-8 transition-all duration-300 hover:bg-gray-50 group ${
                  programIndex < pipelinePrograms.length - 1 ? 'border-b-2 border-gray-400' : ''
                }`}
              >
                {/* Program Name Column */}
                <div className="p-4 border-r-2 border-gray-400 flex items-center justify-center bg-white transition-all duration-300 group-hover:bg-blue-50">
                  <div className="text-center">
                    <div className="font-bold text-purple-600 text-sm leading-tight transition-all duration-300 group-hover:text-purple-800 group-hover:transform group-hover:scale-105">
                      {program.name}
                    </div>
                  </div>
                </div>

                {/* Progress Columns */}
                <div className="col-span-7 p-4 flex items-center bg-white transition-all duration-300 group-hover:bg-blue-50">
                  <ArrowProgress program={program} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Table - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {pipelinePrograms.map((program) => (
            <div key={program.id} className="bg-white border-2 border-gray-400 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#1464B9] hover:transform hover:scale-105 group relative
            before:absolute before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-4 before:border-r-4 before:border-t-[#1464B9] before:border-r-[#1464B9] before:transition-all before:duration-300 before:opacity-0
            after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-t-4 after:border-r-4 after:border-t-transparent after:border-r-transparent after:transition-all after:duration-300
            hover:before:w-1/2 hover:before:h-1/2 hover:before:opacity-100 hover:before:shadow-lg
            hover:after:w-1/2 hover:after:h-1/2 hover:after:border-t-[#0f4c8c] hover:after:border-r-[#0f4c8c] hover:after:shadow-xl">
              {/* Program Header */}
              <div className="p-4 border-b-2 border-gray-400 transition-all duration-300 group-hover:bg-[#dbeafe]" style={{ backgroundColor: '#E8F5E8' }}>
                <h3 className="font-bold text-purple-600 text-lg text-center transition-all duration-300 group-hover:text-purple-800 group-hover:transform group-hover:scale-105">
                  {program.name}
                </h3>
              </div>
              
              {/* Progress Section */}
              <div className="p-4 transition-all duration-300 group-hover:bg-blue-50">
                <div className="text-center mb-4">
                  <span className="text-sm font-semibold text-[#6B7280] transition-all duration-300 group-hover:text-[#4B5563]">
                    Current Phase: {program.currentPhase}
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowProgress program={program} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Summary */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#1464B9] hover:transform hover:scale-105 group relative
        before:absolute before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-4 before:border-r-4 before:border-t-[#1464B9] before:border-r-[#1464B9] before:transition-all before:duration-300 before:opacity-0
        after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-t-4 after:border-r-4 after:border-t-transparent after:border-r-transparent after:transition-all after:duration-300
        hover:before:w-1/2 hover:before:h-1/2 hover:before:opacity-100 hover:before:shadow-lg
        hover:after:w-1/2 hover:after:h-1/2 hover:after:border-t-[#0f4c8c] hover:after:border-r-[#0f4c8c] hover:after:shadow-xl">
          <h3 className="text-2xl font-bold text-[#1464B9] font-inter mb-6 text-center transition-all duration-300 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105">
            Pipeline Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#1464B9] font-inter mb-2 transition-all duration-300 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-110">4</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins transition-all duration-300 group-hover:text-[#4B5563]">Total Programs</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#81C784] font-inter mb-2 transition-all duration-300 group-hover:text-[#66BB6A] group-hover:transform group-hover:scale-110">1</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins transition-all duration-300 group-hover:text-[#4B5563]">Discovery</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#FF9800] font-inter mb-2 transition-all duration-300 group-hover:text-[#F57C00] group-hover:transform group-hover:scale-110">3</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins transition-all duration-300 group-hover:text-[#4B5563]">Lead Optimization</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl font-bold text-[#10B981] font-inter mb-2 transition-all duration-300 group-hover:text-[#059669] group-hover:transform group-hover:scale-110">0</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins transition-all duration-300 group-hover:text-[#4B5563]">Clinical Phase</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-[#1464B9] group relative
        before:absolute before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-4 before:border-r-4 before:border-t-[#1464B9] before:border-r-[#1464B9] before:transition-all before:duration-300 before:opacity-0
        after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-t-4 after:border-r-4 after:border-t-transparent after:border-r-transparent after:transition-all after:duration-300
        hover:before:w-1/2 hover:before:h-1/2 hover:before:opacity-100 hover:before:shadow-lg
        hover:after:w-1/2 hover:after:h-1/2 hover:after:border-t-[#0f4c8c] hover:after:border-r-[#0f4c8c] hover:after:shadow-xl">
          <h4 className="text-lg font-bold text-[#1464B9] font-inter mb-4 text-center transition-all duration-300 group-hover:text-[#0f4c8c] group-hover:transform group-hover:scale-105">
            Development Stage Legend
          </h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-4 bg-[#81C784] border border-gray-400 rounded-sm transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-md"></div>
              <span className="font-poppins text-[#6B7280] transition-all duration-300 group-hover:text-[#4B5563]">Discovery</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-4 bg-[#FF9800] border border-gray-400 rounded-sm transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-md"></div>
              <span className="font-poppins text-[#6B7280] transition-all duration-300 group-hover:text-[#4B5563]">Lead Optimization</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-4 bg-[#FFEB3B] border border-gray-400 rounded-sm transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-md"></div>
              <span className="font-poppins text-[#6B7280] transition-all duration-300 group-hover:text-[#4B5563]">Preclinical</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-4 bg-[#4CAF50] border border-gray-400 rounded-sm transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-md"></div>
              <span className="font-poppins text-[#6B7280] transition-all duration-300 group-hover:text-[#4B5563]">Clinical Phases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};