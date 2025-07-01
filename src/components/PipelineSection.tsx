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
    <div className="flex items-center">
      <div className={`relative ${getArrowWidth()} h-8 sm:h-12`}>
        <svg
          viewBox="0 0 300 48"
          className="w-full h-full"
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
          />
          <text
            x="130"
            y="28"
            textAnchor="middle"
            className="fill-black font-bold text-xs sm:text-sm"
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
    <section id="pipeline" className="min-h-screen py-20 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1464B9] leading-tight font-inter mb-6">
            Our Innovation Pipeline
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto font-poppins">
            Leading the future of precision medicine
          </p>
        </div>

        {/* Pipeline Table - Desktop */}
        <div className="hidden lg:block bg-white border-2 border-gray-400 overflow-hidden max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-8 border-b-2 border-gray-400">
            {stages.map((stage, index) => (
              <div 
                key={stage.id} 
                className="p-4 text-center border-r-2 border-gray-400 last:border-r-0"
                style={{ backgroundColor: stage.bgColor }}
              >
                <span className="font-bold text-blue-700 text-sm">
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
                className={`grid grid-cols-8 ${
                  programIndex < pipelinePrograms.length - 1 ? 'border-b-2 border-gray-400' : ''
                }`}
              >
                {/* Program Name Column */}
                <div className="p-4 border-r-2 border-gray-400 flex items-center justify-center bg-white">
                  <div className="text-center">
                    <div className="font-bold text-purple-600 text-sm leading-tight">
                      {program.name}
                    </div>
                  </div>
                </div>

                {/* Progress Columns */}
                <div className="col-span-7 p-4 flex items-center bg-white">
                  <ArrowProgress program={program} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Table - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {pipelinePrograms.map((program) => (
            <div key={program.id} className="bg-white border-2 border-gray-400 rounded-lg overflow-hidden">
              {/* Program Header */}
              <div className="p-4 border-b-2 border-gray-400" style={{ backgroundColor: '#E8F5E8' }}>
                <h3 className="font-bold text-purple-600 text-lg text-center">
                  {program.name}
                </h3>
              </div>
              
              {/* Progress Section */}
              <div className="p-4">
                <div className="text-center mb-4">
                  <span className="text-sm font-semibold text-[#6B7280]">
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
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#1464B9] font-inter mb-6 text-center">
            Pipeline Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1464B9] font-inter mb-2">4</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins">Total Programs</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#81C784] font-inter mb-2">1</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins">Discovery</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF9800] font-inter mb-2">3</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins">Lead Optimization</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981] font-inter mb-2">0</div>
              <div className="text-sm font-semibold text-[#6B7280] font-poppins">Clinical Phase</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="text-lg font-bold text-[#1464B9] font-inter mb-4 text-center">
            Development Stage Legend
          </h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-[#81C784] border border-gray-400 rounded-sm"></div>
              <span className="font-poppins text-[#6B7280]">Discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-[#FF9800] border border-gray-400 rounded-sm"></div>
              <span className="font-poppins text-[#6B7280]">Lead Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-[#FFEB3B] border border-gray-400 rounded-sm"></div>
              <span className="font-poppins text-[#6B7280]">Preclinical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-[#4CAF50] border border-gray-400 rounded-sm"></div>
              <span className="font-poppins text-[#6B7280]">Clinical Phases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};