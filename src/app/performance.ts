// Configuration des optimisations de performance

export const performanceConfig = {
  // Préchargement des pages importantes
  preloadPages: [
    '/pages/contact',
    '/pages/lead-gen',
    '/pages/sentinel',
    '/pages/coverage',
    '/pages/about'
  ],
  
  // Cache TTL en millisecondes
  cacheTTL: {
    navigation: 5 * 60 * 1000, // 5 minutes
    staticData: 30 * 60 * 1000, // 30 minutes
    images: 24 * 60 * 60 * 1000, // 24 heures
  },
  
  // Optimisations d'images
  images: {
    formats: ['image/webp', 'image/avif'],
    sizes: {
      thumbnail: '150px',
      small: '300px',
      medium: '600px',
      large: '1200px',
    },
    quality: 85,
  },
  
  // Optimisations de navigation
  navigation: {
    prefetchDelay: 1000, // Délai avant préchargement
    transitionDuration: 150, // Durée de transition
    enableSmoothScrolling: true,
  },
  
  // Optimisations de bundle
  bundle: {
    enableTreeShaking: true,
    enableCodeSplitting: true,
    enableCompression: true,
  }
};

// Fonction utilitaire pour optimiser les images
export function optimizeImage(src: string, size: keyof typeof performanceConfig.images.sizes) {
  return {
    src,
    sizes: performanceConfig.images.sizes[size],
    format: 'webp',
    quality: performanceConfig.images.quality,
  };
}

// Fonction utilitaire pour le préchargement
export function shouldPreload(pathname: string): boolean {
  return performanceConfig.preloadPages.includes(pathname);
} 