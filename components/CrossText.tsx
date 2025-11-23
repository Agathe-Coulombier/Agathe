'use client';
import { useState, useRef } from 'react';

interface CrossTextProps {
  text: string;
  className?: string;
}

export default function CrossText({ text, className = '' }: CrossTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const scramble = () => {
    if (isAnimating) return;
    
    // Lock the width before starting animation
    if (spanRef.current) {
      const currentWidth = spanRef.current.offsetWidth;
      spanRef.current.style.width = `${currentWidth}px`;
      spanRef.current.style.display = 'inline-block';
      spanRef.current.style.whiteSpace = 'nowrap';
    }
    
    setIsAnimating(true);
    let iteration = 0;
    const speed = 50; // milliseconds per frame

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            // Preserve whitespace and special characters that should stay visible
            if (char === ' ' || char === '-') return char;
            
            // Reveal characters progressively
            if (index < iteration) {
              return text[index];
            }
            
            // Show small cross for unrevealed characters
            return '+';
          })
          .join('')
      );

      iteration += 1;

      if (iteration > text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        
        // Unlock the width after animation completes
        if (spanRef.current) {
          spanRef.current.style.width = '';
        }
      }
    }, speed);
  };

  return (
    <span
      ref={spanRef}
      onMouseEnter={scramble}
      className={`inline-block ${className}`}
    >
      {displayText}
    </span>
  );
}
