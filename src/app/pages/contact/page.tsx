"use client";

import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import { ShieldIcon, TargetIcon, PhoneIcon, EmailIcon } from '../../components/Icons';

export default function ContactPage() {

  const handleLeadsSubmit = (data: any) => {
    console.log('Leads request submitted:', data);
    // Here you would typically send the data to your API
  };

  const scrollToForm = () => {
    // Scroll to the form section
    setTimeout(() => {
      const formSection = document.querySelector('.py-24.bg-white');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
              <ShieldIcon className="mr-2" size={16} />
              Get Started
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to transform weather events into business opportunities?
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">24h</div>
              <div className="text-blue-100 font-semibold">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">100%</div>
              <div className="text-green-100 font-semibold">Free Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">7 days</div>
              <div className="text-purple-100 font-semibold">Intelligence Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Forms Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form Content */}
          <div className="mb-16">
            <ContactForm
              type="leads"
              title="Request Business Intelligence"
              description="Tell us about your target market and we'll deliver actionable B2B intelligence within 7 days."
              onSubmit={handleLeadsSubmit}
            />
          </div>

          {/* Additional Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Sentinel Shield?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Real-time Detection</p>
                    <p className="text-gray-600 text-sm">24/7 satellite monitoring of weather events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ZIP-level Precision</p>
                    <p className="text-gray-600 text-sm">Ultra-precise targeting down to the ZIP code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Verified Contacts</p>
                    <p className="text-gray-600 text-sm">Decision-makers with validated contact information</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <EmailIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:intel@bpcorp.eu" className="text-gray-600 hover:text-blue-600 transition-colors">intel@bpcorp.eu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How quickly can you deliver intelligence?
              </h3>
              <p className="text-gray-700">
                We typically deliver actionable intelligence within 7 days of a weather event. For urgent requests, we can expedite to 24-48 hours.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What information do you provide with each intelligence package?
              </h3>
              <p className="text-gray-700">
                Each package includes: verified decision-maker contact (name, role, email, phone), business location (ZIP-level), sector & size, risk score, and contact urgency.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can you target specific industries or territories?
              </h3>
              <p className="text-gray-700">
                Yes! We can target any industry (Energy, Logistics, Manufacturing, etc.) and any Texas territory down to the ZIP code level.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Is there a minimum intelligence volume requirement?
              </h3>
              <p className="text-gray-700">
                No minimum requirement. We can deliver anywhere from 25 to 500+ intelligence units per batch, depending on your needs and the event scope.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join the companies already using Sentinel Shield to turn weather events into business opportunities.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Request Your First Intelligence Package
          </button>
        </div>
      </div>
    </div>
  );
} 