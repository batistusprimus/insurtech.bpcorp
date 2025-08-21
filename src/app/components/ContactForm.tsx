"use client";

import React, { useState } from 'react';

interface ContactFormProps {
  type: 'leads' | 'contact';
  title: string;
  description: string;
  onSubmit: (data: any) => void;
}

export default function ContactForm({ type, title, description, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    territory: '',
    message: '',
    leadVolume: '',
    urgency: '',
    eventType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Préparer les données pour l'API
      const submitData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        type
      };

      // Appel à l'API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          territory: '',
          message: '',
          leadVolume: '',
          urgency: '',
          eventType: ''
        });
        onSubmit(formData);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Energy & Petrochemical',
    'Logistics & Warehousing',
    'Manufacturing',
    'Agriculture & Food Processing',
    'Construction & Real Estate',
    'Other'
  ];

  const territories = [
    'Houston Metro',
    'Dallas-Fort Worth',
    'Austin',
    'San Antonio',
    'All Texas',
    'Custom Territory'
  ];

  const leadVolumes = [
    '25-50 intelligence units per week',
    '50-100 intelligence units per week',
    '100-250 intelligence units per week',
    '250+ intelligence units per week',
    'Custom volume'
  ];

  const urgencyLevels = [
    'Immediate - Need intelligence this week',
    'High - Within 2 weeks',
    'Medium - Within 1 month',
    'Low - Planning phase'
  ];

  const eventTypes = [
    'Floods & Storms',
    'Extreme Heat',
    'Drought',
    'Wildfires',
    'All Weather Events',
    'Custom Event Type'
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-responsive-3xl font-bold text-gray-900 mb-4 text-overflow-safe">{title}</h2>
          <p className="text-gray-600 text-overflow-safe">{description}</p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <div className="text-green-600 mr-3">✅</div>
              <div className="text-overflow-safe">
                <p className="text-green-800 font-semibold text-overflow-safe">Thank you!</p>
                <p className="text-green-700 text-sm text-overflow-safe">
                  {type === 'leads' 
                    ? 'We\'ll review your request and get back to you within 24 hours with actionable business intelligence.'
                    : 'We\'ll get back to you within 24 hours.'
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <div className="text-red-600 mr-3">❌</div>
              <div className="text-overflow-safe">
                <p className="text-red-800 font-semibold text-overflow-safe">Something went wrong</p>
                <p className="text-red-700 text-sm text-overflow-safe">Please try again or contact us directly.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Lead-specific fields */}
          {type === 'leads' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="territory" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Territory *
                  </label>
                  <select
                    id="territory"
                    name="territory"
                    value={formData.territory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Territory</option>
                    {territories.map(territory => (
                      <option key={territory} value={territory}>{territory}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leadVolume" className="block text-sm font-medium text-gray-700 mb-2">
                    Intelligence Volume *
                  </label>
                  <select
                    id="leadVolume"
                    name="leadVolume"
                    value={formData.leadVolume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Volume</option>
                    {leadVolumes.map(volume => (
                      <option key={volume} value={volume}>{volume}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Urgency</option>
                    {urgencyLevels.map(urgency => (
                      <option key={urgency} value={urgency}>{urgency}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type Focus
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Events</option>
                  {eventTypes.map(eventType => (
                    <option key={eventType} value={eventType}>{eventType}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {type === 'leads' ? 'Additional Requirements' : 'Message *'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required={type === 'contact'}
              placeholder={type === 'leads' 
                ? 'Any specific requirements, target criteria, or questions...'
                : 'How can we help you?'
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-responsive-lg rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl text-overflow-safe ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </div>
              ) : (
                type === 'leads' ? 'Request Business Intelligence' : 'Send Message'
              )}
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p className="text-overflow-safe">We respect your privacy. Your information will never be shared with third parties.</p>
          </div>
        </form>
      </div>
    </div>
  );
} 