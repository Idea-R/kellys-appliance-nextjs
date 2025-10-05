import React from 'react';
import { InformationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ServiceCalloutProps {
  type?: 'info' | 'success' | 'warning';
  title: string;
  children: React.ReactNode;
}

export default function ServiceCallout({ type = 'info', title, children }: ServiceCalloutProps) {
  const styles = {
    info: {
      container: 'bg-blue-50 border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      IconComponent: InformationCircleIcon
    },
    success: {
      container: 'bg-green-50 border-green-200',
      icon: 'text-green-600',
      title: 'text-green-900',
      IconComponent: CheckCircleIcon
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      icon: 'text-yellow-600',
      title: 'text-yellow-900',
      IconComponent: ExclamationTriangleIcon
    }
  };

  const style = styles[type];
  const Icon = style.IconComponent;

  return (
    <div className={`${style.container} border-l-4 rounded-lg p-6 shadow-sm my-6`}>
      <div className="flex items-start gap-4">
        <Icon className={`h-6 w-6 ${style.icon} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-2 ${style.title}`}>{title}</h3>
          <div className="text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
