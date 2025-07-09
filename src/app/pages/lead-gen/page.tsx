import React from 'react';
import Link from 'next/link';
import { TargetIcon, TrendingUpIcon, CheckIcon, TimerIcon } from '../../components/Icons';

export default function LeadGenPage() {
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
              <TargetIcon className="mr-2" size={16} />
              Lead Generation
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Qualified B2B Leads
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Get verified decision-makers from climate-impacted businesses in less than 24 hours
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">24h</div>
              <div className="text-blue-100 font-semibold">Delivery Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">100%</div>
              <div className="text-green-100 font-semibold">Verified Contacts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">ZIP</div>
              <div className="text-purple-100 font-semibold">Level Precision</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              How Our Lead Generation Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We detect weather events in real-time and deliver qualified B2B leads before your competitors even know what happened.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TargetIcon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Real-time Detection</h3>
              <p className="text-gray-600">
                Our Sentinel Climate Intelligence system monitors weather events 24/7 with ZIP-level precision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUpIcon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Lead Qualification</h3>
              <p className="text-gray-600">
                Clyma™ AI engine enriches and verifies contact data for decision-makers in affected areas.
              </p>
            </div>
            <div className="text-center">
                          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TimerIcon className="w-10 h-10 text-purple-600" />
            </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Fast Delivery</h3>
              <p className="text-gray-600">
                Receive qualified leads within 24 hours via our PayPerLeads™ performance-based model.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Get Your First Leads?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join the companies already using Sentinel Shield to turn weather events into business opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Request Leads Now
            </a>
            <Link 
              href="/pages/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 