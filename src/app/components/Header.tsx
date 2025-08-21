'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: 'Business Intelligence', href: '/pages/lead-gen' },
    { name: 'Sentinel Climate', href: '/pages/sentinel' },
    { name: 'Contact', href: '/pages/contact' }
  ];

  const dropdownMenus = {
    'coverage-industries': {
      label: 'Coverage & Industries',
      items: [
        { name: 'Coverage Areas', href: '/pages/coverage' },
        { name: 'Industries', href: '/pages/industries' }
      ]
    },
    'bp-corporation': {
      label: 'BP Corporation',
      items: [
        { name: 'Resources', href: '/pages/resources' },
        { name: 'Blog', href: '/pages/blog' },
        { name: 'About', href: '/pages/about' },
        { name: 'Careers', href: '/pages/careers' }
      ]
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (dropdownKey: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(dropdownKey);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Délai de 150ms avant fermeture
  };

  const handleDropdownClose = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(null);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-[48px] group">
            <div className="relative">
              <Image 
                src="/2.png" 
                alt="Logo BPC" 
                width={48} 
                height={48} 
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105" 
                priority
                loading="eager"
                sizes="48px"
              />
              <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center max-w-4xl pl-4">
            <div className="flex items-center space-x-6 w-full overflow-visible text-overflow-safe">
              <Navigation items={navigationItems} />
              
              {/* Coverage & Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('coverage-industries')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap text-overflow-safe border rounded-lg shadow-sm hover:shadow-md ${activeDropdown === 'coverage-industries' ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50'}`}
                  type="button"
                  tabIndex={0}
                >
                  {dropdownMenus['coverage-industries'].label}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === 'coverage-industries' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Menu déroulant sans gap */}
                {activeDropdown === 'coverage-industries' && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200/60 py-2 z-50 backdrop-blur-sm"
                    onMouseEnter={() => handleDropdownEnter('coverage-industries')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownMenus['coverage-industries'].items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-overflow-safe mx-2 rounded-lg"
                        onClick={handleDropdownClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BP Corporation Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('bp-corporation')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap text-overflow-safe border rounded-lg shadow-sm hover:shadow-md ${activeDropdown === 'bp-corporation' ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50'}`}
                  type="button"
                  tabIndex={0}
                >
                  {dropdownMenus['bp-corporation'].label}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === 'bp-corporation' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Menu déroulant sans gap */}
                {activeDropdown === 'bp-corporation' && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200/60 py-2 z-50 backdrop-blur-sm"
                    onMouseEnter={() => handleDropdownEnter('bp-corporation')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownMenus['bp-corporation'].items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-overflow-safe mx-2 rounded-lg"
                        onClick={handleDropdownClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center pr-4">
            <Link
              href="/pages/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap text-overflow-safe"
            >
              Access Business Intelligence
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
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
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
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
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200/60 shadow-lg">
            <Navigation 
              items={navigationItems} 
              className="space-y-1"
              onItemClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Coverage & Industries Section */}
            <div className="pt-4 border-t border-gray-200/60">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Coverage & Industries
              </div>
              <div className="space-y-1">
                {dropdownMenus['coverage-industries'].items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-overflow-safe rounded-lg mx-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile BP Corporation Section */}
            <div className="pt-4 border-t border-gray-200/60">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                BP Corporation
              </div>
              <div className="space-y-1">
                {dropdownMenus['bp-corporation'].items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-overflow-safe rounded-lg mx-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/pages/contact"
                prefetch={true}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg block text-center text-overflow-safe"
                onClick={() => setIsMenuOpen(false)}
              >
                Access Business Intelligence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 