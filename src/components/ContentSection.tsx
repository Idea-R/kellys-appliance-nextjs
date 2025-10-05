import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700">
        {children}
      </div>
    </div>
  );
}
