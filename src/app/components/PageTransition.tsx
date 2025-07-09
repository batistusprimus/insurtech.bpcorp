'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { performanceConfig } from '../performance';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    // Transition rapide basée sur la configuration
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, performanceConfig.navigation.transitionDuration);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      {children}
    </div>
  );
} 