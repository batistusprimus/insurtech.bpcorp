"use client";

import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { ShieldIcon, TargetIcon, XIcon } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'leads' | 'contact' | 'email';
}

export default function ContactModal({ isOpen, onClose, defaultType = 'leads' }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'leads' | 'contact'>(defaultType === 'email' ? 'contact' : defaultType || 'leads');

  const handleLeadsSubmit = (data: any) => {
    console.log('Leads request submitted:', data);
    // Here you would typically send the data to your API
    onClose();
  };

  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your API
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Get Started with Sentinel Shield
              </h3>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <XIcon size={24} />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-1 flex shadow-sm">
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'leads'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <TargetIcon className="inline mr-2" size={16} />
                  Request Business Intelligence
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ShieldIcon className="inline mr-2" size={16} />
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-6">
            {activeTab === 'leads' ? (
              <ContactForm
                type="leads"
                title="Request Business Intelligence"
                description="Tell us about your target market and we'll deliver actionable B2B intelligence within 7 days."
                onSubmit={handleLeadsSubmit}
              />
            ) : (
              <ContactForm
                type="contact"
                title="Get in Touch"
                description="Have questions about Sentinel Shield? We're here to help."
                onSubmit={handleContactSubmit}
              />
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p>We respect your privacy. Your information will never be shared with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 