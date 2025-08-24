import React from 'react';
import ContactCTA from '../components/ContactCTA';
import { CheckIcon, NumberIcon, EmailIcon, TargetIcon } from '../components/Icons';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
            <TargetIcon className="mr-2" size={16} />
            Partners
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Join the Sentinel Shield Partner Network
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            Resell exclusive climate risk business leads. Delivered in &lt;24h. Paid per lead.
          </p>
          <div className="flex justify-center">
            <ContactCTA
              href="#apply"
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              Apply Now
            </ContactCTA>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-flex items-center justify-center mb-4 text-blue-600">
              <NumberIcon number={1} size={36} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h3>
            <p className="text-gray-700">Apply by email to become an official partner.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-flex items-center justify-center mb-4 text-blue-600">
              <NumberIcon number={2} size={36} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h3>
            <p className="text-gray-700">Get access to fresh, verified leads after every catastrophe.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-flex items-center justify-center mb-4 text-blue-600">
              <NumberIcon number={3} size={36} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h3>
            <p className="text-gray-700">Resell under your brand and keep your margin.</p>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
          Partner Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '20–40 % commission per lead',
            'White-label or co-brand',
            'Delivery <24h',
            'Minimum 50 leads/month',
            'No upfront cost, no risk',
          ].map((benefit) => (
            <div key={benefit} className="flex items-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <span className="text-green-600 mt-0.5 mr-3">
                <CheckIcon size={20} />
              </span>
              <span className="text-gray-800">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
          Pricing
        </h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
          <ul className="space-y-3 text-gray-800">
            <li>• 20 % margin (50–100 leads/month).</li>
            <li>• 30 % margin (100–250 leads/month).</li>
            <li>• 40 % margin (250+ leads/month).</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
          FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Q: How are leads verified?</h3>
            <p className="text-gray-700">A: Each lead includes verified email, phone, ICP fit, and explicit interest.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Q: Can I sell under my own brand?</h3>
            <p className="text-gray-700">A: Yes, choose white-label or co-brand.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Q: What’s the minimum volume?</h3>
            <p className="text-gray-700">A: 50 leads/month to activate the partnership.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Q: How do I get paid?</h3>
            <p className="text-gray-700">A: You invoice your clients directly, we deduct our share automatically.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-2">Q: Which geographies are covered?</h3>
            <p className="text-gray-700">A: Texas first (hurricanes, floods, storms, wildfires), expansion to Florida, Louisiana, Oklahoma soon.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="apply" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="inline-flex items-center justify-center px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <EmailIcon className="text-blue-600 mr-3" size={20} />
          <span className="text-gray-800 mr-2">For application:</span>
          <a href="mailto:baptiste@bpcorp.eu" className="text-blue-600 hover:text-blue-700 font-semibold">baptiste@bpcorp.eu</a>
        </div>
      </section>
    </div>
  );
}


