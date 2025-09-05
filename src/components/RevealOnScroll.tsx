"use client";

import React from 'react';

type RevealOnScrollProps = {
  children: React.ReactNode;
  /** Directional intent for entrance animation */
  direction?: 'left' | 'right' | 'up';
  /** Trigger threshold for IntersectionObserver */
  threshold?: number;
  /** Optional animation delay in ms */
  delayMs?: number;
  /** Only animate once */
  once?: boolean;
  className?: string;
};

export default function RevealOnScroll({
  children,
  direction = 'up',
  threshold = 0.2,
  delayMs,
  once = true,
  className = '',
}: RevealOnScrollProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const hiddenBase = 'opacity-0 translate-y-6';
  const delayStyle = delayMs ? { animationDelay: `${delayMs}ms` } : undefined;

  const visibleAnim =
    direction === 'left'
      ? 'animate-slide-in-left'
      : direction === 'right'
      ? 'animate-slide-in-right'
      : 'animate-fade-in-up';

  return (
    <div
      ref={containerRef}
      className={`${isVisible ? visibleAnim : hiddenBase} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}


