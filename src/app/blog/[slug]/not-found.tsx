import React from 'react';
import Link from 'next/link';

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">📊</div>
          <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Intelligence Brief Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The intelligence brief you're looking for has either been moved, archived, or doesn't exist. 
            Our analysts might be working on classified data.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🔍 What you can do:
          </h3>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>• Check the URL for typos</li>
            <li>• Browse our latest intelligence briefs</li>
            <li>• Search for specific topics or categories</li>
            <li>• Contact our intelligence team for archived content</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pages/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
            </svg>
            Browse All Briefs
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Need immediate assistance? Contact our intelligence team:</p>
          <p className="mt-2">
            <a href="mailto:intel@sentinelbriefs.com" className="text-blue-600 hover:text-blue-800 font-medium">
              intel@sentinelbriefs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 