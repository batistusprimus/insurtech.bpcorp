import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy</h2>
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h3>1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul>
              <li>Fill out contact forms</li>
              <li>Request leads or services</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
            </ul>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process your requests and deliver leads</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing materials (with your consent)</li>
            </ul>
            
            <h3>3. Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            
            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h3>5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            
            <h3>6. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu" className="text-blue-600 hover:text-blue-800">baptiste@bpcorp.eu</a><br />
              <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A, Hungary
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 