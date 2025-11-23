'use client';
import { useEffect, useState, useRef } from 'react';

export default function Crosshair() {
  const [isHovering, setIsHovering] = useState(false);
  const crosshairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update position directly via transform for better performance
      if (crosshairRef.current) {
        crosshairRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('scramble-text') ||
        target.closest('.scramble-text') !== null;
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={crosshairRef}
      className={`crosshair ${isHovering ? 'expanded' : ''}`}
    >
      <div className="crosshair-line crosshair-horizontal" />
      <div className="crosshair-line crosshair-vertical" />
    </div>
  );
}
