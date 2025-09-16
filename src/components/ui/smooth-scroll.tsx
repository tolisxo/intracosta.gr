'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = forwardRef<HTMLDivElement, SmoothScrollProps>(({ children }, ref) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Slightly faster for more responsive feel
        duration: 1.2, // Faster duration for snappier scrolling
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1.2, // More responsive wheel scrolling
        touchMultiplier: 2, // Better touch scrolling
        infinite: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        normalizeWheel: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for smoother feel
      }}
    >
      <div ref={ref}>
        {children}
      </div>
    </ReactLenis>
  );
});

SmoothScroll.displayName = 'SmoothScroll';

export default SmoothScroll;