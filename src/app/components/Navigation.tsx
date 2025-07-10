'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  items: Array<{ name: string; href: string }>;
  className?: string;
  onItemClick?: () => void;
}

export default function Navigation({ items, className = '', onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch={true}
          className={`text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap text-overflow-safe ${
            pathname === item.href ? 'text-blue-600 font-semibold' : ''
          } ${className.includes('space-y-1') ? 'hover:bg-gray-50 block px-3 py-2 rounded-md text-base' : ''}`}
          onClick={onItemClick}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 