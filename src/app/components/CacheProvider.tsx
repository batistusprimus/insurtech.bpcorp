'use client';

import { createContext, useContext, useMemo } from 'react';

interface CacheContextType {
  get: (key: string) => any;
  set: (key: string, value: any, ttl?: number) => void;
  clear: () => void;
}

const CacheContext = createContext<CacheContextType | null>(null);

export function CacheProvider({ children }: { children: React.ReactNode }) {
  const cache = useMemo(() => {
    const store = new Map<string, { value: any; expiry: number }>();

    return {
      get: (key: string) => {
        const item = store.get(key);
        if (!item) return null;
        
        if (Date.now() > item.expiry) {
          store.delete(key);
          return null;
        }
        
        return item.value;
      },
      
      set: (key: string, value: any, ttl = 5 * 60 * 1000) => { // 5 minutes par défaut
        store.set(key, {
          value,
          expiry: Date.now() + ttl
        });
      },
      
      clear: () => {
        store.clear();
      }
    };
  }, []);

  return (
    <CacheContext.Provider value={cache}>
      {children}
    </CacheContext.Provider>
  );
}

export function useCache() {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
} 