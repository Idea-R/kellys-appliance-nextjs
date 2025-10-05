import React from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

interface ServiceProblemCardProps {
  problem: string;
  description?: string;
  icon?: React.ReactNode;
  index: number;
}

export default function ServiceProblemCard({ problem, description, icon, index }: ServiceProblemCardProps) {
  const tiltClass = index % 3 === 0 ? 'tilt-left' : index % 3 === 1 ? 'tilt-none' : 'tilt-right';
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover-scale ${tiltClass} border-l-4 border-green-600 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-green-100 text-green-700 rounded-full p-3 flex-shrink-0">
          {icon || <WrenchScrewdriverIcon className="h-6 w-6" />}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{problem}</h3>
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
