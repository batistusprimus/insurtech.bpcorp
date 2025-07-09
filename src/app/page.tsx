import React from "react";
import Image from "next/image";
import ContactCTA from "./components/ContactCTA";
import { 
  Zap, 
  Target, 
  DollarSign, 
  Satellite, 
  Database, 
  UserCheck, 
  TrendingUp, 
  RefreshCw,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Users,
  Star,
  Building2,
  BarChart3,
  Globe,
  MapPin,
  Eye,
  X,
  FileText,
  Briefcase,
  CreditCard
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 border-b border-gray-200 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg border border-blue-500/20">
                  <Globe className="w-4 h-4 mr-2" />
                  Texas - 24h Delivery
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight tracking-normal">
                Get Qualified Leads From Climate-Exposed Businesses in Texas — 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Delivered in 24h</span>
              </h1>
              
              {/* Value Propositions */}
              <div className="space-y-6 mb-10 text-lg text-gray-700">
                <div className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                  <span><strong className="text-gray-900">Sentinel Climate Intelligence</strong> detects disaster zones in real time</span>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                  <span>Our <strong className="text-gray-900">SCI engine</strong> identifies and qualifies exposed companies</span>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                  <span><strong className="text-gray-900">BPCGROUP</strong> delivers sales-ready leads. You only pay per result</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <ContactCTA 
                  type="leads" 
                  variant="primary" 
                  size="lg"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span>Request Leads</span>
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </ContactCTA>
                <a href="#coverage" className="group inline-flex items-center justify-center px-10 py-5 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>View Coverage</span>
                </a>
              </div>
            </div>
            
            {/* Right Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-normal">Why It Works</h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When businesses get hit by a climate event, they need insurance, recovery, and legal services — 
                    <strong className="text-gray-900"> immediately</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We help you reach them before anyone else.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700 font-medium">No databases</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700 font-medium">No cold outreach</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 font-bold">Only real leads generated by real-world impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
              <RefreshCw className="w-4 h-4 mr-2" />
              Process Overview
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-normal">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A 3-step process to transform climate disasters into business opportunities
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="group relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform -translate-y-1/2 z-0"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span>1</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
              </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-normal">
                Sentinel detects the event
              </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Flood, storm, drought or fire — our system identifies the exact zones affected.
              </p>
                
                {/* Feature Card */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/50">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Satellite className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-blue-800 font-bold">Real-time detection 24/7</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-green-600 to-purple-600 transform -translate-y-1/2 z-0"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span>2</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
              </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-normal">
                Clyma enriches the companies
              </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Name, contact, phone, role, ICP fit, interest, budget (when declared).
              </p>
                
                {/* Feature Card */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200/50">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-green-800 font-bold">Automated enrichment</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span>3</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
              </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-normal">
                You receive qualified leads in {`<`}24h
              </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Format: CSV or CRM-ready. Volume adjusted to your needs.
              </p>
                
                {/* Feature Card */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200/50">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-purple-800 font-bold">Guaranteed delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl border border-gray-300/50">
              <Clock className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700 font-semibold">Complete process takes less than 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
              <CheckCircle className="w-4 h-4 mr-2" />
              Deliverables
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-normal">
                What You Get
              </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete, verified, and ready-to-use lead data delivered to your specifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
              <div className="space-y-8">
              <div className="group p-6 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-normal">Business name & decision-maker</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">Direct contact with key decision makers</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-normal">Email & phone verified manually</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">Contact data validated by our team</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-normal">Declared interest (insurance, legal, recovery)</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">Specific needs identified according to your sector</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-normal">Geo-targeted (ZIP-level)</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">Geographic precision for optimal targeting</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-normal">Ready to contact, no setup needed</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">Immediate integration into your workflow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sample Lead */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-normal">
                Sample Lead Delivered
              </h3>
                </div>

                {/* Lead Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 rounded-xl p-8 space-y-6 shadow-lg">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Company:</span>
                    <span className="font-bold text-gray-900 text-lg">Austin Manufacturing Co.</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Contact:</span>
                    <span className="font-bold text-gray-900 text-lg">Sarah Johnson, CFO</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Email:</span>
                    <span className="font-bold text-blue-600 text-lg">s.johnson@austinmfg.com</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Phone:</span>
                    <span className="font-bold text-gray-900 text-lg">(512) 555-0123</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Event:</span>
                    <span className="font-bold text-red-600 text-lg">Flood - Austin, TX 78701</span>
                </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-semibold">Need:</span>
                    <span className="font-bold text-purple-600 text-lg">Property damage insurance</span>
                </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-semibold">Status:</span>
                    <span className="font-bold text-green-600 text-lg">Ready to contact</span>
                </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200/50">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800 font-semibold">Verified & Ready to Use</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING MODEL */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
              <DollarSign className="w-4 h-4 mr-2" />
              Performance-Based Pricing
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-normal">
              Pricing Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pay only for qualified leads that generate results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card - Pay Per Lead */}
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-normal">
                Pay only per qualified lead
              </h3>
                </div>
                
                {/* Benefits List */}
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200/50">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 text-lg font-semibold">No setup fees</span>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200/50">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 text-lg font-semibold">No commitment</span>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200/50">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 text-lg font-semibold">Prepaid discount available</span>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200/50">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                </div>
                    <span className="text-gray-800 text-lg font-semibold">Monthly volume adjustable</span>
                </div>
                </div>
              </div>
            </div>

            {/* Right Card - CPL Factors */}
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-normal">
                CPL depends on:
              </h3>
                </div>
                
                {/* Factors */}
                <div className="space-y-8">
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200/50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 tracking-normal">Volume</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">Higher volume = lower cost per lead</p>
                  </div>
                  
                  <div className="p-6 bg-purple-50 rounded-xl border border-purple-200/50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 tracking-normal">Type of event</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">Urgency and severity of climate disaster</p>
                  </div>
                  
                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-200/50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 tracking-normal">Region</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">Data availability and geographic complexity</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl border border-gray-300/50">
              <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700 font-semibold">Transparent pricing with no hidden costs</span>
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC FOCUS */}
      <section id="coverage" className="relative py-32 bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-3000"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 mb-8">
              <Globe className="w-4 h-4 mr-2" />
              Coverage Map
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 tracking-normal">
                Geographic Focus
              </h2>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Hyperlocal targeting with precision down to ZIP code level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Texas Focus */}
            <div className="lg:col-span-7">
              {/* Main Texas Card */}
              <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-3xl mb-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                <div>
                      <h3 className="text-4xl font-bold text-white mb-2 tracking-normal">Texas Only</h3>
                      <p className="text-xl text-blue-200">Hyperlocal targeting</p>
                    </div>
                  </div>
                  <p className="text-xl text-blue-100 leading-relaxed mb-8">
                    We operate by county & ZIP code using Sentinel{"'"}s disaster mapping for maximum precision.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <div className="text-5xl font-bold text-blue-400 mb-2">254</div>
                      <div className="text-blue-200 font-semibold">Counties covered</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <div className="text-5xl font-bold text-green-400 mb-2">2.3M</div>
                      <div className="text-green-200 font-semibold">Businesses tracked</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Areas */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6 tracking-normal">Coming Soon:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group p-6 bg-white/5 border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 text-blue-400 mr-4" />
                      <span className="text-xl font-bold text-white">Florida</span>
                    </div>
                  </div>
                  <div className="group p-6 bg-white/5 border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 text-blue-400 mr-4" />
                      <span className="text-xl font-bold text-white">Louisiana</span>
                    </div>
                  </div>
                  <div className="group p-6 bg-white/5 border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 text-blue-400 mr-4" />
                      <span className="text-xl font-bold text-white">Oklahoma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <a href="/pages/coverage" className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
                  <Eye className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  View Real-Time Coverage
                </a>
              </div>
            </div>

            {/* Right Column - Monitoring Dashboard */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Satellite className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-normal">
                    Live Monitoring
              </h3>
                  <p className="text-green-300 font-semibold">24/7 Active Surveillance</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-blue-200 text-sm font-semibold">Active monitoring</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-blue-400 mb-2">15min</div>
                    <div className="text-blue-200 text-sm font-semibold">Scan frequency</div>
                  </div>
                </div>

                {/* Events List */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-6 tracking-normal text-center">Monitored Events</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Floods</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Tornadoes</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Wildfires</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Hail</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Droughts</span>
                </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-blue-200 font-semibold">Hurricanes</span>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
              <Users className="w-4 h-4 mr-2" />
              Target Markets
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-normal">
              Who It{"'"}s For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions for B2B professionals seeking high-intent prospects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Insurance Providers Card */}
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Shield className="w-10 h-10 text-white" />
              </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-normal">
                Commercial Insurance Providers
              </h3>
                    <p className="text-blue-600 font-semibold">Primary Market</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Reach damaged businesses at the exact moment they{"'"}re seeking insurance coverage with our real-time disaster detection system.
                </p>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200/50">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Property damage insurance</span>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200/50">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Business interruption</span>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200/50">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Commercial liability</span>
                  </div>
                </div>

                {/* ROI Indicator */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-800 font-bold text-lg">High Conversion Rate</p>
                      <p className="text-blue-700 text-sm">Immediate need = higher close rate</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">85%</div>
                      <div className="text-blue-700 text-sm">Avg. response rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Brokers Card */}
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Briefcase className="w-10 h-10 text-white" />
              </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-normal">
                B2B Brokers & Agents
              </h3>
                    <p className="text-gray-600 font-semibold">Secondary Market</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Grow your portfolio with qualified clients having immediate and urgent needs for recovery and support services.
                </p>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Recovery services</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Legal counsel</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold">Financial services</span>
                  </div>
                </div>

                {/* ROI Indicator */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-800 font-bold text-lg">Portfolio Growth</p>
                      <p className="text-gray-700 text-sm">High-value clients with urgent needs</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-700">3.2x</div>
                      <div className="text-gray-600 text-sm">Avg. deal size</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl border border-gray-300/50">
              <Target className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700 font-semibold">Both markets benefit from our real-time disaster intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* POWERED BY BPCGROUP */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
              <Building2 className="w-4 h-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-normal">
              Powered by BPCGROUP
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our proprietary technology stack combines real-time intelligence, AI-powered enrichment, and performance-based delivery
            </p>
          </div>

          {/* Technology Flow */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: Detection */}
              <div className="group relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform -translate-y-1/2 z-0"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                    1
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-10 h-10 text-blue-600" />
              </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-normal">
                Sentinel Climate Intelligence
              </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Real-time climate event detection with geographic precision down to ZIP code level.
                  </p>
                  
                  {/* Key Features */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">24/7 monitoring</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">15-minute updates</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">7 disaster types</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Enrichment */}
              <div className="group relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-600 to-purple-600 transform -translate-y-1/2 z-0"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                    2
            </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-green-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-normal">
                    Clyma™ AI Engine
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Advanced AI-powered lead enrichment and qualification with verified contact data.
                  </p>
                  
                  {/* Key Features */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Contact verification</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Intent scoring</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Budget analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Delivery */}
              <div className="group relative">
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                    3
            </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-purple-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-normal">
                    PayPerLeads™
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    100% performance-based model with guaranteed delivery and no upfront costs.
                  </p>
                  
                  {/* Key Features */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="text-gray-700">Pay per result</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="text-gray-700">24h delivery</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="text-gray-700">No commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center shadow-2xl border border-gray-700/50">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-normal">
              Our Promise
            </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                <X className="w-8 h-8 text-red-400 mb-3" />
                <span className="text-white font-semibold text-center">No noise</span>
                <span className="text-gray-300 text-sm text-center mt-2">Only qualified prospects</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <span className="text-white font-semibold text-center">High-intent prospects</span>
                <span className="text-gray-300 text-sm text-center mt-2">Climate-impacted businesses</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                <Zap className="w-8 h-8 text-blue-400 mb-3" />
                <span className="text-white font-semibold text-center">Speed advantage</span>
                <span className="text-gray-300 text-sm text-center mt-2">Before competitors react</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="request-leads" className="py-24 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-xl">
            Start converting crisis into contracts
          </h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Our leads are waiting for your offer. Get in touch and receive qualified, ready-to-contact prospects in less than 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-xl shadow-lg border-2 border-blue-400/30"
            >
              Request Leads
            </a>
            <a href="mailto:baptiste@bpcorp.eu" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold rounded-lg border-2 border-blue-400 hover:bg-blue-900 transition-colors text-xl shadow-lg">
              <Mail className="w-6 h-6 mr-3" />
              Email Us
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-100">
            <div className="text-center flex flex-col items-center justify-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <p className="font-bold text-lg">Direct Email</p>
              <p className="text-lg">baptiste@bpcorp.eu</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <p className="font-bold text-lg">Guaranteed Response</p>
              <p className="text-lg">Within 2h during business hours</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
