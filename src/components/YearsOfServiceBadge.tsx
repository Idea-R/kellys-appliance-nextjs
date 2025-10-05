import React from 'react';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';

interface YearsOfServiceBadgeProps {
  years: number;
  position?: 'corner' | 'inline';
}

// Determine milestone tier and styling
function getMilestone(years: number) {
  if (years >= 30) {
    return {
      tier: 'legend',
      label: `${years} Years`,
      bg: 'bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600',
      text: 'text-white',
      ring: 'ring-4 ring-amber-300/50',
      Icon: Trophy,
      glow: 'shadow-lg shadow-amber-400/50',
      stars: 3
    };
  } else if (years >= 20) {
    return {
      tier: 'platinum',
      label: `${years} Years`,
      bg: 'bg-gradient-to-br from-slate-300 via-gray-200 to-slate-400',
      text: 'text-gray-800',
      ring: 'ring-4 ring-slate-300/50',
      Icon: Award,
      glow: 'shadow-lg shadow-slate-300/50',
      stars: 2
    };
  } else if (years >= 10) {
    return {
      tier: 'gold',
      label: `${years} Years`,
      bg: 'bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500',
      text: 'text-gray-900',
      ring: 'ring-4 ring-yellow-300/50',
      Icon: Star,
      glow: 'shadow-lg shadow-yellow-400/50',
      stars: 2
    };
  } else if (years >= 5) {
    return {
      tier: 'silver',
      label: `${years} Years`,
      bg: 'bg-gradient-to-br from-emerald-500 via-green-400 to-emerald-600',
      text: 'text-white',
      ring: 'ring-4 ring-emerald-300/50',
      Icon: Sparkles,
      glow: 'shadow-lg shadow-emerald-400/50',
      stars: 1
    };
  } else {
    return {
      tier: 'bronze',
      label: `${years} Years`,
      bg: 'bg-gradient-to-br from-blue-500 via-sky-400 to-blue-600',
      text: 'text-white',
      ring: 'ring-2 ring-blue-300/50',
      Icon: Sparkles,
      glow: 'shadow-md shadow-blue-400/50',
      stars: 1
    };
  }
}

export default function YearsOfServiceBadge({ years, position = 'corner' }: YearsOfServiceBadgeProps) {
  const milestone = getMilestone(years);
  const Icon = milestone.Icon;

  if (position === 'corner') {
    // Decorative badge for card corner
    return (
      <div className="absolute bottom-3 right-3 z-10 group/badge">
        <div className={`
          ${milestone.bg} ${milestone.text} ${milestone.ring} ${milestone.glow}
          rounded-full px-3 py-1.5 backdrop-blur-sm
          transform transition-all duration-300
          group-hover/badge:scale-110 group-hover/badge:rotate-3
          flex items-center gap-1.5
        `}>
          <Icon className="h-4 w-4 animate-pulse" />
          <span className="text-xs font-bold whitespace-nowrap">{milestone.label}</span>
          
          {/* Sparkle stars for high tiers */}
          {milestone.stars >= 2 && (
            <div className="flex gap-0.5">
              {Array.from({ length: milestone.stars }).map((_, i) => (
                <Star 
                  key={i} 
                  className="h-2.5 w-2.5 fill-current animate-pulse" 
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tooltip on hover */}
        <div className="
          absolute bottom-full right-0 mb-2 
          opacity-0 group-hover/badge:opacity-100
          transition-opacity duration-200
          pointer-events-none
        ">
          <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
            {years} Years of Service
            <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </div>
      </div>
    );
  }

  // Inline badge for modal/detailed view
  return (
    <div className={`
      ${milestone.bg} ${milestone.text} ${milestone.ring} ${milestone.glow}
      inline-flex items-center gap-2 rounded-full px-4 py-2
      transform transition-all duration-300 hover:scale-105
    `}>
      <Icon className="h-5 w-5" />
      <div className="flex flex-col">
        <span className="text-sm font-bold">{milestone.label}</span>
        <span className="text-xs opacity-90">of Service</span>
      </div>
      {milestone.stars >= 2 && (
        <div className="flex gap-0.5 ml-1">
          {Array.from({ length: milestone.stars }).map((_, i) => (
            <Star 
              key={i} 
              className="h-3 w-3 fill-current" 
            />
          ))}
        </div>
      )}
    </div>
  );
}
