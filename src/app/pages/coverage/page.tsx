import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import { SatelliteIcon, TargetIcon, TornadoIcon, BuildingIcon, TrendingUpIcon, CheckIcon } from '../../components/Icons';

export default function CoveragePage() {
  const coverageSteps = [
    {
      number: '1',
      title: 'Real-Time Event Detection',
      description: 'Satellite + NOAA + radar feeds detect floods, storms, droughts, and wildfires across Texas—updated daily.'
    },
    {
      number: '2',
      title: 'ZIP-Level Mapping',
      description: 'Each affected area is mapped down to ZIP code. No generalizations. No radius-based estimates.'
    },
    {
      number: '3',
      title: 'Lead Volume Forecasting',
      description: 'We estimate how many verified companies are located within each zone and match your targeting criteria.'
    },
    {
      number: '4',
      title: 'Weekly Batch Delivery',
      description: 'Lead lists are refreshed and dispatched every week, as new events emerge or zones update.'
    }
  ];

  const activeZones = [
    {
      name: 'Harris County (Houston)',
      event: 'Flash Flood + Windstorm',
      zips: ['77002', '77009', '77021', '77024'],
      leadVolume: '150+ (mid-market)',
      sectors: ['Logistics', 'Light Industrial', 'Real Estate Dev.']
    },
    {
      name: 'Dallas County',
      event: 'Extreme Heat + Grid Instability',
      zips: ['75201', '75211', '75217'],
      leadVolume: '90–120',
      sectors: ['Manufacturing', 'Commercial Office', 'Warehousing']
    },
    {
      name: 'Bexar County (San Antonio)',
      event: 'Tornado Cluster – June 30',
      zips: ['78205', '78207', '78210'],
      leadVolume: '60–80',
      sectors: ['Food Processing', 'Construction', 'Local Services']
    }
  ];

  const roadmap = [
    {
      phase: 'Current',
      location: 'Texas (full state, all counties)'
    },
    {
      phase: 'Next',
      location: 'Florida (Q4 2025)'
    },
    {
      phase: 'Next',
      location: 'Louisiana & Oklahoma (Q1 2026)'
    },
    {
      phase: 'Next',
      location: 'Southeast U.S. Corridor (2026–2027)'
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
              Live Coverage
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Operational Coverage Map
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Where Sentinel Shield™ Operates
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">254</div>
              <div className="text-blue-100 font-semibold">Texas Counties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">1,200+</div>
              <div className="text-green-100 font-semibold">ZIP Codes Active</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">24/7</div>
              <div className="text-purple-100 font-semibold">Real-Time Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">&lt;7 days</div>
              <div className="text-orange-100 font-semibold">Lead Delivery</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  We don't guess. <span className="text-blue-300">We detect.</span>
                </p>
                <p>
                  Every zone listed below has been scanned, validated, and confirmed as impacted by a recent or ongoing climate event.
                </p>
                <p className="font-semibold text-white text-xl">
                  If it's listed, we can deliver verified B2B leads—within days.
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      {/* How Coverage Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              <SatelliteIcon className="inline mr-2 text-blue-600" size={48} />
              How Coverage Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Currently Active Zones Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              📦 Currently Active Zones (Updated Weekly)
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p><strong>Last Update:</strong> July 7, 2025</p>
              <p><strong>Next Batch Available:</strong> July 12, 2025</p>
            </div>
          </div>
          
          <div className="space-y-8">
            {activeZones.map((zone, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    <CheckIcon className="text-white" size={16} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{zone.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Event:</h4>
                    <p className="text-gray-700">{zone.event}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Affected ZIPs:</h4>
                    <p className="text-gray-700">{zone.zips.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lead Volume:</h4>
                    <p className="text-gray-700">{zone.leadVolume}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dominant Sectors:</h4>
                    <p className="text-gray-700">{zone.sectors.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 space-y-4">
            <p className="text-lg text-gray-700">
              → More ZIP zones available upon request.
            </p>
            <p className="text-lg text-gray-700">
              → Custom dispatches available for corporate clients.
            </p>
          </div>
        </div>
      </div>

      {/* Request Custom Zone Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                🔍 Request a Custom Zone
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Want to know if your target region was hit recently?<br />
                We can generate a tailored lead list for:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  <TargetIcon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Any Texas ZIP or county</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  <TornadoIcon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Any event type (wind, water, heat, fire)</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  <BuildingIcon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Any industry or revenue segment</h3>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                📩 Send your zone request →
              </p>
              <ContactCTA 
                type="contact" 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Request Leads
              </ContactCTA>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Expansion Roadmap */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              📈 Coverage Expansion Roadmap
            </h2>
          </div>
          
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.phase}:</h3>
                    <p className="text-xl text-gray-700">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
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
              🔘 Request Leads Now
            </ContactCTA>
            <a 
              href="/pages/sentinel"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              🔘 View Sentinel Intelligence System
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 