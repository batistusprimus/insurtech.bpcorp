import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import { OilIcon, BuildingIcon, ConstructionIcon, TargetIcon, BuildingIcon as FactoryIcon } from '../../components/Icons';

export default function IndustriesPage() {
  const industries = [
    {
      icon: <OilIcon className="text-blue-600" size={48} />,
      title: 'Energy & Petrochemical',
      subtitle: '→ Highest priority vertical (Houston Gulf Coast)',
      description: 'Refineries, terminals, and offshore hubs sit in high-risk zones',
      keyPoint: 'Weather disruptions = millions lost per day',
      capability: 'Sentinel identifies every impacted facility within 24–48h of an event',
      useCases: [
        'Infrastructure audits post-flood or hurricane',
        'Emergency procurement leads',
        'Facility-level risk scoring by ZIP'
      ]
    },
    {
      icon: '🚚',
      title: 'Logistics & Warehousing',
      subtitle: '→ I-35 / I-45 corridors | Winter storms & grid risk',
      description: 'Freeze events, power outages, and rerouting needs hit this sector hard',
      capability: 'SCI identifies hubs, cold chain points, and urgent contracts opportunities',
      useCases: [
        'Emergency transport & backup suppliers',
        'Site risk score for each warehouse / hub',
        'Outbound sales to exposed operators (within 3–5 days post-event)'
      ]
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      subtitle: '→ Dallas, Austin, Fort Worth regions',
      description: 'High operational sensitivity to temperature, wind, and infrastructure disruption',
      capability: 'We track JIT manufacturers & core suppliers',
      useCases: [
        'Production downtime recovery',
        'Facility retrofit / continuity consulting',
        'Supplier risk forecasting'
      ]
    },
    {
      icon: '🌾',
      title: 'Agriculture & Food Processing',
      subtitle: '→ Drought & freeze prone, seasonal cycles',
      description: 'Exposure to water stress, extreme heat, supply chain bottlenecks',
      capability: 'Lower digitization = lower visibility = perfect lead target',
      useCases: [
        'Irrigation and equipment providers',
        'Ag-logistics / refrigeration partners',
        'County-level targeting for field facilities'
      ]
    },
    {
      icon: <ConstructionIcon className="text-blue-600" size={48} />,
      title: 'Construction & Real Estate Development',
      subtitle: '→ Project-level risk visibility after storms or delays',
      description: 'Each event creates sudden demand: structural review, remediation, compliance',
      capability: 'SCI finds active sites or project clusters within impacted areas',
      useCases: [
        'Roofing / repair / waterproofing',
        'Permitting + engineering support',
        'Post-flood asset repositioning'
      ]
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
              <TargetIcon className="mr-2" size={16} />
              Target Markets
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Who Uses Sentinel Intelligence
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Built for Operators, Not Observers
            </p>
          </div>
          
          {/* Key Metrics by Industry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">5</div>
              <div className="text-blue-100 font-semibold">Core Industries</div>
              <div className="text-blue-200 text-sm mt-2">Energy, Logistics, Manufacturing, Agriculture, Construction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">24-48h</div>
              <div className="text-green-100 font-semibold">Detection Speed</div>
              <div className="text-green-200 text-sm mt-2">From event to verified leads</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">100%</div>
              <div className="text-purple-100 font-semibold">Revenue Focused</div>
              <div className="text-purple-200 text-sm mt-2">Feeds pipelines, not dashboards</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  Sentinel Shield is used by businesses that <span className="text-blue-300">act fast</span> when disaster strikes.
                </p>
                <p>
                  We serve companies that need to protect, support, or recover operational infrastructure—not analysts.
                </p>
                <p className="font-semibold text-white text-xl">
                  Our data feeds revenue pipelines, not dashboards.
                </p>
              </div>
              
              {/* Industry Preview */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-white text-sm font-semibold">Energy</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="text-white text-sm font-semibold">Logistics</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🏭</div>
                  <div className="text-white text-sm font-semibold">Manufacturing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🌾</div>
                  <div className="text-white text-sm font-semibold">Agriculture</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🏗️</div>
                  <div className="text-white text-sm font-semibold">Construction</div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="text-6xl">{industry.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      {industry.subtitle}
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      {industry.description}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-4">
                      {industry.keyPoint}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      {industry.capability}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Common use cases:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <p className="text-gray-700 font-medium">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Industries Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                📌 Custom Industries Available
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                If your company sells to exposed businesses (infra, tech, facilities, logistics, agri, ops…), 
                Sentinel Shield identifies the who, where, and when in real time.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                You'll know:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    📍
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Which ZIPs were hit</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    🏢
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">What sectors operate there</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    👥
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">How many verified contacts we can deliver this week</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <ContactCTA 
              type="contact" 
              variant="primary" 
              size="lg"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl mr-4"
            >
              🔘 Request Leads
            </ContactCTA>
            <a 
              href="/pages/coverage"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              🔘 See Live Coverage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 