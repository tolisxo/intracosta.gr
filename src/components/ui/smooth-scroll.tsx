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
        lerp: 0.05,
        duration: 1.8,
        smoothWheel: true,
        smoothTouch: true,
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