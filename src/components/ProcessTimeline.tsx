import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
}

export default function ProcessTimeline({ steps, title = "How We Fix It" }: ProcessTimelineProps) {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">Our proven 4-step repair process</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-600" style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }}></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative z-10 border-t-4 border-green-600 cursor-pointer group">
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed min-h-[4rem]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
