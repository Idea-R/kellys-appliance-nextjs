import React from 'react';

interface FloatingBadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'accent';
  pulse?: boolean;
}

export default function FloatingBadge({ text, variant = 'primary', pulse = false }: FloatingBadgeProps) {
  const variants = {
    primary: 'bg-green-600 text-white',
    secondary: 'bg-blue-600 text-white',
    accent: 'bg-yellow-500 text-gray-900'
  };

  return (
    <div className={`${variants[variant]} px-4 py-2 rounded-full font-semibold text-sm shadow-lg inline-flex items-center gap-2 ${pulse ? 'animate-pulse' : ''}`}>
      {pulse && <span className="w-2 h-2 bg-white rounded-full"></span>}
      {text}
    </div>
  );
}
