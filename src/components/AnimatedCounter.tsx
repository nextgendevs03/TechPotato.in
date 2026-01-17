import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  displayValue?: string;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  displayValue,
  className = '',
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const animate = useCallback(() => {
    if (hasStarted || displayValue) return;
    
    setHasStarted(true);
    
    const startTime = Date.now();
    const endValue = end;
    
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(endValue * easedProgress);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, hasStarted, displayValue]);

  useEffect(() => {
    if (isInView && !hasStarted) {
      // Small delay to ensure the element is visible
      const timer = setTimeout(() => {
        animate();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, animate]);

  // If displayValue is provided, show it directly
  if (displayValue) {
    return (
      <span ref={ref} className={className}>
        {displayValue}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
