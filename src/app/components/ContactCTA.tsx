"use client";

import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { TargetIcon, ShieldIcon } from './Icons';

interface ContactCTAProps {
  type?: 'leads' | 'contact';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function ContactCTA({ 
  type = 'leads', 
  variant = 'primary', 
  size = 'md',
  className = '',
  children 
}: ContactCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const defaultText = type === 'leads' ? 'Request Leads' : 'Contact Us';
  const IconComponent = type === 'leads' ? TargetIcon : ShieldIcon;

  const handleClick = () => {
    if (type === 'leads') {
      // Redirect to iClosed for leads
      window.open('https://app.iclosed.io/e/baptistepiocelle/contact', '_blank');
    } else {
      // Open modal for general contact
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={buttonClasses}
      >
        {children || (
          <>
            <IconComponent className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
            {defaultText}
          </>
        )}
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType={type}
      />
    </>
  );
} 