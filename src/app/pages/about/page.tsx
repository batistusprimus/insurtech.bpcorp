import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import { ShieldIcon, TargetIcon, TrendingUpIcon } from '../../components/Icons';

export default function AboutPage() {
  const whatWeDo = [
    'Detect major weather events via satellite + AI',
    'Identify exposed business infrastructure (ZIP-level)',
    'Score risk by severity, urgency, and economic impact',
    'Deliver verified B2B leads to sales teams—on demand'
  ];

  const texasStats = [
    { value: '$19.4B', label: 'in weather losses in 2023 alone' },
    { value: '160,000+', label: 'companies with no operational risk score' }
  ];

  const roadmap = [
    {
      year: '2025',
      title: 'Texas',
      description: 'Lead Gen + Embedded Risk Intelligence'
    },
    {
      year: '2026',
      title: 'Florida, Louisiana, Oklahoma',
      description: 'Hurricane & Flood Risk'
    },
    {
      year: '2027',
      title: 'National Rollout',
      description: 'Energy, Logistics, Food Supply'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section - Enhanced */}
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
              Our Mission
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              About Sentinel Shield™
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Turning Chaos Into Clarity
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">$19.4B</div>
              <div className="text-blue-100 font-semibold">Texas Weather Losses 2023</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">&lt;7 days</div>
              <div className="text-green-100 font-semibold">Detection to Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">160K+</div>
              <div className="text-purple-100 font-semibold">Unscored Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">100%</div>
              <div className="text-orange-100 font-semibold">Texas Focus</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  Sentinel Shield™ is a climate intelligence system built for one market:
                </p>
                <p className="text-xl text-blue-200">
                  Texas-based B2B companies operating under extreme weather risk.
                </p>
                <div className="space-y-4 text-lg">
                  <p className="text-white">We don't do policy.</p>
                  <p className="text-white">We don't do predictions.</p>
                  <p className="font-semibold text-blue-300 text-xl">
                    We deliver actionable exposure data—fast enough to sell, act, or protect while it still matters.
                  </p>
                </div>
              </div>
              
              {/* Mission Preview */}
              <div className="mt-12 bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <p className="text-2xl font-bold text-white mb-2">
                  "Protection Through Precision."
                </p>
                <p className="text-blue-200">
                  To make catastrophic weather events measurable, local, and actionable—so the businesses hit hardest get the help fastest.
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                🎯 Our Mission
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                  "Protection Through Precision."
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To make catastrophic weather events measurable, local, and actionable—so the businesses hit hardest get the help fastest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              🧠 What We Do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              {whatWeDo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">&lt;7 days</div>
                <div className="text-blue-700 font-semibold">All in under 7 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Texas Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              📍 Why Texas?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Because it's the proving ground:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {texasStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="text-3xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Carriers leaving, infrastructure exposed, data missing
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Texas businesses aren't looking for "green apps."</h3>
              <p className="text-lg text-gray-700 mb-6">
                They want numbers, contacts, and next steps.
              </p>
              <p className="text-xl font-semibold text-blue-600">
                That's what we build.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BPCGROUP Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              🧩 Backed by BPCGROUP
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Sentinel Shield™ is developed and operated by BPCGROUP, a private venture company building data-first systems for high-impact industries.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              📈 The Road Ahead
            </h2>
          </div>
          
          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              We're not building a SaaS.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              We're building the intelligence layer of post-disaster commerce.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ContactCTA 
            type="contact" 
            variant="primary" 
            size="lg"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            🔘 Request Leads
          </ContactCTA>
        </div>
      </div>
    </div>
  );
} 