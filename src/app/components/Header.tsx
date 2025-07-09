'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Lead Generation', href: '/pages/lead-gen' },
    { name: 'Sentinel Climate', href: '/pages/sentinel' },
    { name: 'Coverage Areas', href: '/pages/coverage' },
    { name: 'Industries', href: '/pages/industries' },
    { name: 'Resources', href: '/pages/resources' },
    { name: 'Blog', href: '/pages/blog' },
    { name: 'About', href: '/pages/about' },
    { name: 'Contact', href: '/pages/contact' },
    { name: 'Careers', href: '/pages/careers' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-[48px]">
            <Image 
              src="/2.png" 
              alt="Logo BPC" 
              width={48} 
              height={48} 
              className="h-10 w-10 object-contain" 
              priority
              loading="eager"
              sizes="48px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center max-w-3xl pl-4">
            <div className="flex items-center space-x-4 w-full overflow-x-auto">
              <Navigation items={navigationItems} />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center pr-4">
            <Link
              href="/pages/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 shadow-sm whitespace-nowrap"
            >
              Find my Leads
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Navigation 
              items={navigationItems} 
              className="space-y-1"
              onItemClick={() => setIsMenuOpen(false)}
            />
            <div className="pt-4">
              <Link
                href="/pages/contact"
                prefetch={true}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Find my Leads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 