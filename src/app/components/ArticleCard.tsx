import React from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/types/blog';

interface ArticleCardProps {
  article: BlogArticle;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const cardClass = featured 
    ? "bg-white rounded-3xl p-12 shadow-xl border border-gray-200 transform hover:scale-105 transition-all duration-300"
    : "bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300";

  return (
    <article className={cardClass}>
      <div className="flex items-start space-x-6">
        {/* Category Icon */}
        <div className={`text-6xl ${featured ? 'text-6xl' : 'text-4xl'} flex-shrink-0`}>
          {article.category.icon}
        </div>
        
        <div className="flex-1">
          {/* Category Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3">
            {article.category.name}
          </div>
          
          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-4 ${featured ? 'text-3xl' : 'text-xl'} leading-tight`}>
            <Link 
              href={`/blog/${article.slug}`}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {article.title}
            </Link>
          </h3>
          
          {/* Description */}
          <p className={`text-gray-700 mb-6 ${featured ? 'text-lg' : 'text-base'} leading-relaxed`}>
            {article.description}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Author */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{article.author.name}</div>
                  <div className="text-gray-600">{article.author.role}</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              
              {/* Read Time */}
              <div className="text-sm text-gray-600">
                {article.readTime} min read
              </div>
              
              {/* Published Date */}
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>
            
            {/* Featured Badge */}
            {featured && (
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full">
                🔥 Featured
              </div>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                +{article.tags.length - 3} more
              </span>
            )}
          </div>
          
          {/* Read More Button */}
          <div className="mt-6">
            <Link
              href={`/blog/${article.slug}`}
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${featured ? 'text-lg' : 'text-base'}`}
            >
              Read Analysis
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
} 