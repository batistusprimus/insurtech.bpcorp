import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import { 
  SearchIcon, 
  LightningIcon, 
  ChartIcon, 
  TargetIcon, 
  BuildingIcon, 
  GlobeIcon, 
  SettingsIcon, 
  CheckIcon, 
  CircleIcon,
  GearIcon,
  ShieldIcon
} from '../../components/Icons';

export default function SentinelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-700/30 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-600/30">
                <ShieldIcon className="w-4 h-4 mr-2" />
                AI-Powered Weather Intelligence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white">Sentinel</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Shield™</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                Transform weather chaos into qualified B2B leads. Our AI system detects impacted areas and identifies exposed businesses in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ContactCTA 
                  type="contact" 
                  variant="primary" 
                  size="lg"
                  className="inline-flex items-center justify-center bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <TargetIcon className="w-5 h-5 mr-2" />
                  Request Qualified Leads
                </ContactCTA>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-blue-200">
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>91.7% Predictive Accuracy</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>Texas-Focused</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>CRM-Ready Data</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Monitoring</span>
                    </div>
                    <div className="text-xs text-blue-200">Real-time</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Weather Events Detected</span>
                        <span className="text-2xl font-bold text-green-400">3</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Businesses Identified</span>
                        <span className="text-2xl font-bold text-blue-400">247</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Leads Generated</span>
                        <span className="text-2xl font-bold text-purple-400">89</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-blue-200">
                      <span>Last Updated: 2 min ago</span>
                      <span>Texas Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Is Sentinel Shield - More Explanations */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Is Sentinel Shield™?
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Sentinel Shield™</strong> is our artificial intelligence system that monitors Texas in real-time to detect weather impacts and identify business opportunities.
            </p>
            
            <p>
              <strong>The problem:</strong> When a weather event strikes (flood, storm, drought), affected businesses need help quickly. But identifying who has been impacted and when to make contact is difficult.
            </p>
            
            <p>
              <strong>Our solution:</strong> Sentinel Shield analyzes real-time weather data, identifies affected areas, locates exposed businesses, and delivers qualified contacts before your competitors.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-900">
                This is not weather tracking. This is predictive targeting at operational speed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Simplified with More Explanations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Satellite Detection</h3>
                  <p className="text-gray-700 mb-4">
                    We continuously receive data from NASA, NOAA, and local radar to detect floods, storms, droughts, heatwaves, and wildfires across Texas—down to the ZIP code level.
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Data sources:</strong> NASA, NOAA, local radar, weather stations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI Processing</h3>
                  <p className="text-gray-700 mb-4">
                    Each event is analyzed by our AI system trained on over 20 years of weather data and business losses in Texas. We calculate risk probability, economic exposure, and impact radius in minutes.
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-sm text-green-800">
                      <strong>AI capabilities:</strong> Multi-models, 20+ years of training data, risk probability calculation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Identification</h3>
                  <p className="text-gray-700 mb-4">
                    We locate B2B companies operating in exposed areas and assess their vulnerability using operational markers, past disruption data, and risk history.
                  </p>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="text-sm text-purple-800">
                      <strong>Assessment factors:</strong> Operational markers, past disruption data, risk history analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Scoring & Prioritization</h3>
                  <p className="text-gray-700 mb-4">
                    Each business receives a dynamic risk score based on geographic exposure, urgency (time since impact), and estimated operational loss.
                  </p>
                  <div className="bg-orange-50 p-4 rounded">
                    <p className="text-sm text-orange-800">
                      <strong>Risk score factors:</strong> Geographic exposure, urgency, estimated operational loss
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Activation</h3>
                  <p className="text-gray-700 mb-4">
                    Verified decision-maker contacts are qualified and delivered within days. Output is clean, structured, and CRM-ready.
                  </p>
                  <div className="bg-cyan-50 p-4 rounded">
                    <p className="text-sm text-cyan-800">
                      <strong>Delivery features:</strong> Verified decision-makers, CRM-ready format, clean structured data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Receive - Simplified */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What You Receive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Verified Decision-Maker</h3>
              <p className="text-gray-700">Name, role, email, phone</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Location</h3>
              <p className="text-gray-700">ZIP-level precision</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sector & Size</h3>
              <p className="text-gray-700">Relevance to your targeting</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk Score™</h3>
              <p className="text-gray-700">Dynamic risk assessment</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Contact Urgency</h3>
              <p className="text-gray-700">Priority index</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Volume</h3>
              <p className="text-gray-700">25 to 500+ leads per delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why It Matters - More Explanations */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why It Matters
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Every weather event creates a short window of action. Sentinel Shield transforms that chaos into opportunity—before your competitors even see it coming.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-2">91.7%</div>
                <div className="text-green-300">Predictive accuracy</div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-2">2.4TB</div>
                <div className="text-blue-300">Weather data processed daily</div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">&lt;7 days</div>
                <div className="text-purple-300">Detection to lead delivery</div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-orange-300">Compliance, 0% fluff</div>
              </div>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg mt-8">
              <p className="text-center">
                <strong>Built for Texas, trained on Harvey, Uri, and 1,847 other events</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Built for Scale - Simplified */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Built for Scale
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">ZIP-level precision</h3>
              <p className="text-gray-700">Ultra-precise targeting down to the ZIP code level</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Weekly batch delivery</h3>
              <p className="text-gray-700">Consistent, reliable lead delivery schedule</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scales from 10 to 10,000 leads</h3>
              <p className="text-gray-700">Flexible volume to match your needs</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">No software to install</h3>
              <p className="text-gray-700">Cloud-based solution, zero setup required</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fully compatible</h3>
              <p className="text-gray-700">Works with your existing sales workflow</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">CSV or webhook</h3>
              <p className="text-gray-700">Multiple delivery formats available</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Simplified */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to activate the next exposed zone before your competitors do?
          </h2>
          <p className="text-xl mb-8">
            We'll show you what's happening—where, when, and who to call.
          </p>
          <ContactCTA 
            type="contact" 
            variant="primary" 
            size="lg"
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request Leads
          </ContactCTA>
        </div>
      </div>
    </div>
  );
} 