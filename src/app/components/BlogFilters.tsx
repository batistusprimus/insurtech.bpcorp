'use client';

import React, { useState } from 'react';
import { BlogCategory, BlogFilters as BlogFiltersType } from '@/types/blog';

interface BlogFiltersProps {
  categories: BlogCategory[];
  onFiltersChange: (filters: BlogFiltersType) => void;
  currentFilters: BlogFiltersType;
}

export default function BlogFilters({ categories, onFiltersChange, currentFilters }: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(currentFilters.searchQuery || '');

  const handleCategoryChange = (categorySlug: string | undefined) => {
    onFiltersChange({
      ...currentFilters,
      category: categorySlug
    });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onFiltersChange({
      ...currentFilters,
      searchQuery: query
    });
  };

  const handleFeaturedToggle = () => {
    onFiltersChange({
      ...currentFilters,
      featured: currentFilters.featured ? undefined : true
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    onFiltersChange({});
  };

  const hasActiveFilters = currentFilters.category || currentFilters.searchQuery || currentFilters.featured;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
            Search Briefs
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex-1 max-w-xs">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={currentFilters.category || ''}
            onChange={(e) => handleCategoryChange(e.target.value || undefined)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Toggle */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.featured || false}
              onChange={handleFeaturedToggle}
              className="hidden"
            />
            <div className={`w-12 h-6 rounded-full transition-all duration-200 ${
              currentFilters.featured ? 'bg-red-500' : 'bg-gray-300'
            }`}>
              <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                currentFilters.featured ? 'translate-x-6' : 'translate-x-0'
              } flex items-center justify-center`}>
                {currentFilters.featured && <span className="text-xs">🔥</span>}
              </div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              Featured Only
            </span>
          </label>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            
            {currentFilters.category && (
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {categories.find(c => c.slug === currentFilters.category)?.icon} {categories.find(c => c.slug === currentFilters.category)?.name}
                <button
                  onClick={() => handleCategoryChange(undefined)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            
            {currentFilters.featured && (
              <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                🔥 Featured
                <button
                  onClick={handleFeaturedToggle}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </span>
            )}
            
            {currentFilters.searchQuery && (
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                "{currentFilters.searchQuery}"
                <button
                  onClick={() => handleSearchChange('')}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 