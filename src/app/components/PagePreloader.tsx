'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { performanceConfig } from '../performance';

export default function PagePreloader() {
  const router = useRouter();

  useEffect(() => {
    // Précharger les pages importantes après le chargement initial
    const preloadPages = async () => {
      // Attendre que la page soit complètement chargée
      await new Promise(resolve => setTimeout(resolve, performanceConfig.navigation.prefetchDelay));
      
      // Précharger les pages importantes
      performanceConfig.preloadPages.forEach(page => {
        router.prefetch(page);
      });
    };

    preloadPages();
  }, [router]);

  return null; // Ce composant ne rend rien
} 