import React from "react";
import Image from "next/image";
import { CheckIcon, NumberIcon, TargetIcon, RocketIcon, PhoneIcon, TrendingUpIcon, LockIcon } from "../components/Icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fa] to-[#e9ecf3]">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
          Get Qualified Leads From Climate-Affected Businesses in Less Than 24 Hours
        </h1>
        <h2 className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">
          We detect disaster zones in real time and deliver verified leads of exposed businesses—so your sales team reaches them when it matters most.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a 
            href="https://app.iclosed.io/e/baptistepiocelle/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg transition-all"
          >
            Request Leads Now
          </a>
          <a href="/pages/coverage" className="bg-white border border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-full shadow text-lg hover:bg-blue-50 transition-all">
            See Coverage Map
          </a>
        </div>
        {/* 3 Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-2"><CheckIcon className="text-green-600" size={32} /></div>
            <h3 className="font-bold text-lg mb-1">Hyper-Targeted</h3>
            <p className="text-gray-600">We identify impacted businesses down to the ZIP code.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-2"><CheckIcon className="text-green-600" size={32} /></div>
            <h3 className="font-bold text-lg mb-1">High-Intent</h3>
            <p className="text-gray-600">Every lead has expressed interest in coverage or recovery services.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-2"><CheckIcon className="text-green-600" size={32} /></div>
            <h3 className="font-bold text-lg mb-1">Pay Per Lead</h3>
            <p className="text-gray-600">Only pay for verified leads you approve. No setup fees. No risk.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4"><NumberIcon className="text-blue-600" size={48} number={1} /></div>
              <h3 className="font-semibold text-lg mb-2">We Detect</h3>
              <p className="text-gray-600">Using satellite data and real-time weather intelligence, we spot every disaster within hours.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4"><NumberIcon className="text-blue-600" size={48} number={2} /></div>
              <h3 className="font-semibold text-lg mb-2">We Qualify</h3>
              <p className="text-gray-600">Our AI system identifies and verifies business contacts in the exposed area with precision.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4"><NumberIcon className="text-blue-600" size={48} number={3} /></div>
              <h3 className="font-semibold text-lg mb-2">You Receive Leads</h3>
              <p className="text-gray-600">You get a lead list with emails, phone numbers, company info, and declared interest—ready to contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven Results</h2>
          <blockquote className="italic text-lg text-gray-700 mb-6 border-l-4 border-blue-600 pl-4">
            “In just 48 hours after the Texas floods, we closed 7 deals from the leads delivered.”<br/>
            <span className="not-italic font-semibold text-gray-900">— VP, Insurance Partner</span>
          </blockquote>
          {/* Logos/Badges placeholder */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Image src="/66586da221e592872a514716_ecf4541d-3c8f-4731-ace6-7f59afa16df4.png" alt="Client 1" width={80} height={80} className="h-16 w-auto object-contain opacity-80" />
            <Image src="/66586f5324a5f96213323991_e06827a1-d54d-4cff-8f39-d480a4d23967.png" alt="Client 2" width={80} height={80} className="h-16 w-auto object-contain opacity-80" />
            <Image src="/665871bc5f8d9b87ce190b59_1443ebad-ae25-4240-b1e3-1bf8bf237c3a.png" alt="Client 3" width={80} height={80} className="h-16 w-auto object-contain opacity-80" />
            <Image src="/665876e344b512bddc35112e_77189863-0a3b-48f3-9b9d-cf294d14d568.png" alt="Client 4" width={80} height={80} className="h-16 w-auto object-contain opacity-80" />
            <Image src="/6658713033c7316a7e38d620_548af79d-89fc-4542-a939-4eb1fabae0c8.png" alt="Client 5" width={80} height={80} className="h-16 w-auto object-contain opacity-80" />
          </div>
        </div>
      </section>

      {/* WHY CLIMATE RISK LEADS */}
      <section className="py-24 bg-gradient-to-b from-[#f7f8fa] via-white to-[#f7f8fa]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Climate Risk Leads™?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex flex-col items-start md:items-center">
              <div className="text-2xl mb-2"><TargetIcon className="text-blue-600" size={24} /></div>
              <span className="font-semibold">Texas-focused, disaster-aware targeting</span>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <div className="text-2xl mb-2"><RocketIcon className="text-blue-600" size={24} /></div>
              <span className="font-semibold">24h delivery guaranteed</span>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <div className="text-2xl mb-2"><PhoneIcon className="text-blue-600" size={24} /></div>
              <span className="font-semibold">Human-verified business leads</span>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <div className="text-2xl mb-2"><TrendingUpIcon className="text-blue-600" size={24} /></div>
              <span className="font-semibold">Designed for insurance, legal & recovery teams</span>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <div className="text-2xl mb-2"><LockIcon className="text-blue-600" size={24} /></div>
              <span className="font-semibold">GDPR & CAN-SPAM compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta" className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Reach Businesses That Need You?</h2>
          <p className="text-lg mb-8 text-gray-700">View available leads in your region or request a custom package now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg transition-all"
            >
              Request Leads
            </a>
            <a href="/pages/contact" className="bg-white border border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-full shadow text-lg hover:bg-blue-50 transition-all">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 