import React from 'react';
import Link from 'next/link';
import { ShieldIcon, PhoneIcon, EmailIcon, BuildingIcon, GlobeIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: "Services",
      links: [
        { name: "Lead Generation", href: "/pages/lead-gen" },
        { name: "Sentinel Climate", href: "/pages/sentinel" },
        { name: "Coverage Areas", href: "/pages/coverage" },
        { name: "Industries", href: "/pages/industries" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/pages/blog" },
        { name: "Resources", href: "/pages/resources" },
        { name: "Case Studies", href: "/pages/resources" },
        { name: "White Papers", href: "/pages/resources" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/pages/about" },
        { name: "Careers", href: "/pages/careers" },
        { name: "Contact", href: "/pages/contact" },
        { name: "Legal Notice", href: "/mentions-legales" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <ShieldIcon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sentinel Shield</h3>
                <p className="text-blue-200 text-sm">by BP LES CANNISSES KFT</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-overflow-safe">
              Transform weather events into business opportunities with our real-time climate intelligence and qualified B2B leads.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <BuildingIcon className="mr-3 flex-shrink-0" size={20} />
                <span className="text-overflow-safe">1077 Budapest, Rózsa utca 38/A, Hungary</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EmailIcon className="mr-3 flex-shrink-0" size={20} />
                <a href="mailto:leads@bpcorp.eu" className="hover:text-blue-300 transition-colors text-overflow-safe">
                  leads@bpcorp.eu
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white text-overflow-safe">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      prefetch={true}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-overflow-safe"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-gray-400">
              <span>© {currentYear} BP LES CANNISSES KFT</span>
              <span className="hidden md:inline">•</span>
              <Link href="/mentions-legales" prefetch={true} className="hover:text-blue-300 transition-colors">
                Legal Notice
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/politique-confidentialite" prefetch={true} className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Compliance Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 