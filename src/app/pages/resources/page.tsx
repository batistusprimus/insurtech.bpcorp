import React from 'react';
import { SatelliteIcon, TrendingUpIcon, ListIcon, PhoneIcon, CircleIcon, ChartIcon } from '../../components/Icons';

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
      action: 'Request Access',
      actionType: 'primary'
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
      action: 'Download Guide',
      actionType: 'secondary'
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
      action: 'View Bulletin',
      actionType: 'secondary'
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
      action: 'Browse Briefs',
      actionType: 'secondary'
    },
    {
      id: 5,
      icon: '🧠',
      number: '5',
      title: 'The Sentinel Risk Score Widget (Beta)',
      description: 'Embed a simple widget on your CRM or dashboard to receive alerts when your territories become exposed.',
      features: [
        'Plug-and-play',
        'No data sharing required'
      ],
      action: 'Request Integration',
      actionType: 'primary'
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
              Actionable Intelligence You Can Use Today
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">5</div>
              <div className="text-blue-100 font-semibold">Core Resources</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">24/7</div>
              <div className="text-green-100 font-semibold">Live Updates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">0</div>
              <div className="text-purple-100 font-semibold">Gated Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">100%</div>
              <div className="text-orange-100 font-semibold">Actionable</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  Every asset on this page is built for one purpose:
                </p>
                <p className="text-xl text-blue-200">
                  Help you make better decisions faster when weather hits your territory.
                </p>
                <p className="font-semibold text-white text-xl">
                  No fluff. No gated PDFs. Just clarity.
                </p>
              </div>
              
              {/* Resource Preview */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🗺️</div>
                  <div className="text-white font-semibold mb-2">Live Maps</div>
                  <div className="text-blue-200 text-sm">Real-time disaster tracking</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <div className="text-white font-semibold mb-2">Risk Scores</div>
                  <div className="text-blue-200 text-sm">Methodology & guides</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <div className="text-white font-semibold mb-2">Reports</div>
                  <div className="text-blue-200 text-sm">Quarterly insights & trends</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <a 
                  href="#resources"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Explore Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div id="resources" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {resource.title}
                      </h3>
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

                      {/* Action Button */}
                      <a 
                        href={resource.actionType === 'primary' 
                          ? "https://app.iclosed.io/e/baptistepiocelle/contact"
                          : "/pages/contact"
                        }
                        target={resource.actionType === 'primary' ? "_blank" : undefined}
                        rel={resource.actionType === 'primary' ? "noopener noreferrer" : undefined}
                        className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          resource.actionType === 'primary' 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
                        }`}
                      >
                        → {resource.action}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toolkit Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200 shadow-xl">
            <div className="text-6xl mb-6">📥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want Everything in One Place?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              → Download the full Sentinel Intelligence Toolkit (.zip)<br />
              Includes: Methodology guide, sample leads, industry briefs, 7-day exposure forecast.
            </p>
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              🔘 Request Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 