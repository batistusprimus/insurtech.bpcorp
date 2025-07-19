import React from 'react';
import { SatelliteIcon, TrendingUpIcon, ChartIcon } from '../../components/Icons';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      icon: <SatelliteIcon className="text-blue-600" size={32} />,
      number: '1',
      title: 'Texas Disaster Impact Map',
      description: 'Live tracking of weather-exposed zones',
      features: [
        'ZIP-level view of current and recent events',
        'Storm, flood, drought, and fire overlays',
        'Update frequency: Daily'
      ],
      status: 'coming-soon'
    },
    {
      id: 2,
      icon: <TrendingUpIcon className="text-blue-600" size={32} />,
      number: '2',
      title: 'Operational Risk Score™ — Methodology Guide',
      description: 'How Sentinel Shield calculates exposure, urgency, and financial impact.',
      features: [
        'Understand our scoring logic',
        'Use it in your own workflows'
      ],
      status: 'coming-soon'
    },
    {
      id: 3,
      icon: '🧾',
      number: '3',
      title: '[Quarterly] Weather Risk Bulletin – Texas Focus',
      description: 'Latest trends, economic losses, and exposure heatmaps.',
      features: [
        'Top 5 counties hit last quarter',
        'Industries with rising vulnerability',
        'Next 90 days: predicted zones'
      ],
      status: 'coming-soon'
    },
    {
      id: 4,
      icon: '💬',
      number: '4',
      title: 'Strategic Briefs (2-min reads)',
      description: 'Designed for executives and commercial ops leaders.',
      features: [
        '"Why Urgency Beats Coverage"',
        '"How to Reach Exposed Companies Before the News Breaks"',
        '"Timing > Targeting: When to Send, Not Just to Whom"'
      ],
      status: 'coming-soon'
    },
    {
      id: 5,
      icon: '🧠',
      number: '5',
      title: 'The Sentinel Risk Score Widget (Beta)',
      description: 'Embed a simple widget on your CRM or dashboard to receive alerts when your territories become exposed.',
      features: [
        'Plug-and-play integration',
        'No data sharing required',
        'Real-time risk notifications'
      ],
      status: 'coming-soon'
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
              <ChartIcon className="mr-2" size={16} />
              /resources
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Resources & Reports
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Intelligence Tools & Insights Coming Soon
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">5</div>
              <div className="text-blue-100 font-semibold">Resources Planned</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">Q1</div>
              <div className="text-green-100 font-semibold">2025 Launch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">100%</div>
              <div className="text-purple-100 font-semibold">Free Access</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">Real</div>
              <div className="text-orange-100 font-semibold">Time Data</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  We're building the most comprehensive weather intelligence platform for insurance professionals.
                </p>
                <p className="text-xl text-blue-200">
                  Access live risk maps, methodology guides, and actionable insights to help you identify and respond to weather-exposed opportunities faster than ever.
                </p>
                <p className="font-semibold text-white text-lg">
                  Coming in Q1 2025. No gated content. Just results.
                </p>
              </div>
              
              {/* Resource Preview */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🗺️</div>
                  <div className="text-white font-semibold mb-2">Live Risk Maps</div>
                  <div className="text-blue-200 text-sm">Real-time disaster tracking</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <div className="text-white font-semibold mb-2">Risk Methodology</div>
                  <div className="text-blue-200 text-sm">Scoring & calculation guides</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <div className="text-white font-semibold mb-2">Strategic Insights</div>
                  <div className="text-blue-200 text-sm">Executive briefs & trends</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div id="resources" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive intelligence tools designed for insurance professionals to identify, assess, and respond to weather-related opportunities.
            </p>
          </div>
          
          <div className="space-y-12">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Left Column - Icon and Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl text-white font-black shadow-lg">
                          {resource.number}
                        </div>
                        <div className="absolute -top-2 -right-2 text-4xl">
                          {resource.icon}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {resource.title}
                        </h3>
                        {resource.status === 'coming-soon' && (
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Coming Soon
                          </div>
                        )}
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {resource.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Status */}
                      {resource.status === 'coming-soon' && (
                        <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 font-semibold rounded-xl border border-gray-300">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                          Available Q1 2025
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200 shadow-xl">
            <div className="text-6xl mb-6">🔔</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Be the First to Know
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Get notified when our intelligence platform launches in Q1 2025.<br />
              Early access for insurance professionals serious about weather risk.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 font-semibold rounded-xl border border-gray-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Newsletter Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 