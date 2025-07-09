import React from "react";
import { ShieldIcon, BuildingIcon, GlobeIcon, LockIcon } from "../components/Icons";

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
              <ShieldIcon className="mr-2" size={16} />
              Legal Information
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Legal Notice
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed">
              In accordance with Hungarian law and GDPR regulations
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                In accordance with the provisions of Hungarian law and the General Data Protection Regulation (GDPR) of the European Union, the following information is made available to users of the website:
              </p>
            </div>

            {/* Section 1: Website Publisher Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <BuildingIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Website Publisher Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Company Name:</span>
                    <span className="text-gray-900">BP Les Cannisses KFT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Legal Form:</span>
                    <span className="text-gray-900">KFT (Limited Liability Company)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Registration Number:</span>
                    <span className="text-gray-900">32359815142</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Share Capital:</span>
                    <span className="text-gray-900">€8,000</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">VAT Number:</span>
                    <span className="text-gray-900">HU32359815</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Email:</span>
                    <span className="text-gray-900">baptiste@bpcorp.eu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Publication Director:</span>
                    <span className="text-gray-900">Baptiste Piocelle</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-900 mb-2">Registered Office:</p>
                <p className="text-gray-700">1077 Budapest, Rózsa utca 38/A, Hungary</p>
              </div>
            </div>

            {/* Section 2: Website Host Information */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <GlobeIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Website Host Information</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Host Name:</span>
                  <span className="text-gray-900">Vercel Inc.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Host Address:</span>
                  <span className="text-gray-900">340 S Lemon Ave #4133, Walnut, CA 91789, USA</span>
                </div>
              </div>
            </div>

            {/* Section 3: Intellectual Property */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <ShieldIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The entire content of this website is subject to Hungarian and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations. The reproduction of all or part of this site on any electronic medium whatsoever is strictly prohibited without the express authorization of the publication director.
              </p>
            </div>

            {/* Section 4: Personal Data */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border border-yellow-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <LockIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Personal Data</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The website does not collect personal data. Therefore, no privacy policy is required.
              </p>
            </div>

            {/* Section 5: General Terms and Conditions of Sale */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 mb-8 border border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <BuildingIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. General Terms and Conditions of Sale (GTC)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The website does not offer the sale of products or services. Therefore, no general terms and conditions of sale are required.
              </p>
            </div>

            {/* Section 6: Cookies */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8 border border-indigo-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <ShieldIcon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The website does not use cookies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Legal Information?</h3>
          <p className="text-gray-600 mb-8">
            For any questions regarding this legal notice, please contact us directly.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
            <ShieldIcon className="mr-2" size={20} />
            Contact Legal Department
          </div>
        </div>
      </div>
    </div>
  );
} 