import React from 'react';
import { SatelliteIcon, RocketIcon, ChartIcon, TargetIcon, GlobeIcon, ListIcon } from '../../components/Icons';

export default function CareersPage() {
  const departments = [
    {
      icon: '💻',
      title: 'Product & Engineering',
      roles: [
        'Frontend (Next.js, Tailwind, D3)',
        'Backend (Node.js, Python, Supabase)',
        'Data / ML Ops (weather modeling, geospatial analytics)'
      ]
    },
    {
      icon: <SatelliteIcon className="text-blue-600" size={32} />,
      title: 'Climate & Geo Intelligence',
      roles: [
        'Meteorological modeling specialists',
        'GIS experts (Mapbox, Deck.gl, PostGIS)',
        'Risk quantification analysts'
      ]
    },
    {
      icon: <RocketIcon className="text-blue-600" size={32} />,
      title: 'Growth & Ops',
      roles: [
        'Lead Generation Ops',
        'B2B Sales Strategists (Mid-Market & Enterprise)',
        'Partnership Dev (Gov, Climate, Infra)'
      ]
    },
    {
      icon: <ChartIcon className="text-blue-600" size={32} />,
      title: 'Revenue & GTM',
      roles: [
        'Copywriters & content ops (performance + editorial)',
        'CRM automations (HubSpot, Smartlead, n8n)',
        'Customer Success'
      ]
    }
  ];

  const whyJoinNow = [
    'Massive market shift: climate risk is becoming operational',
    'Proven model: profitable, product-ready, deal flow active',
    'Unique tech stack: AI + satellite + real-time economic mapping',
    'Texas as a sandbox, global scale in roadmap'
  ];

  const howWeWork = [
    'Remote-first, timezone-aligned (CET or CST preferred)',
    'Fast cycles, no middle managers',
    'Weekly delivery, zero ego',
    'Clear metrics. Clear ownership.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 text-sm font-semibold mb-8">
              /careers
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
              Work at Sentinel Shield™
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                🧭 Help Us Build the Future of Climate Intelligence
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>We're not building another SaaS.</p>
                <p className="font-semibold text-blue-600">
                  We're building the infrastructure layer of post-disaster B2B commerce.
                </p>
                <p>
                  That means satellites, AI, geopolitics, sales ops, and field data—merged into a single system.<br />
                  And we need smart, sharp, driven people to help us scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Now Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              🌍 Why Join Now?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whyJoinNow.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{reason}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              This is not a lab.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              We ship. We close. We grow.
            </p>
          </div>
        </div>
      </div>

      {/* Who We're Hiring Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              🎯 Who We're Hiring
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{dept.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{dept.title}</h3>
                </div>
                <div className="space-y-4">
                  {dept.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              🧬 How We Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {howWeWork.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              If you want stability, go work at IBM.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              If you want to build something that changes how risk is sold—this is it.
            </p>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              📮 How to Apply
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We don't do cover letters.<br />
              Just send us:
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200 shadow-xl">
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <p>A link to your work or GitHub (for tech)</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <p>1 paragraph: how you'd improve our system or message</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <p>Your LinkedIn or resume if you want to</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-blue-600 mb-4">
                📩 careers@sentinelshield.io
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl mr-4"
            >
              🔘 Request Leads
            </a>
            <a 
              href="/pages/resources"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              🔘 Download Tech Stack Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 