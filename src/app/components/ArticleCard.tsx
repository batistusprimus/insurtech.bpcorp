import React from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/types/blog';

interface ArticleCardProps {
  article: BlogArticle;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article className={`group ${featured ? 'mb-12' : 'mb-8'}`}>
      <div className={`
        ${featured 
          ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-l-4 border-blue-500' 
          : 'bg-white border-l-4 border-gray-200 hover:border-blue-400'
        }
        transition-all duration-300 hover:shadow-lg rounded-r-xl p-8 
        ${featured ? 'shadow-xl' : 'shadow-sm hover:shadow-md'}
      `}>
        
        {/* Header avec catégorie et badge featured */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{article.category.icon}</span>
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
              ${featured ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}
            `}>
              {article.category.name}
            </span>
          </div>
          
          {featured && (
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
              ⭐ Featured
            </div>
          )}
        </div>
        
        {/* Titre */}
        <h3 className={`
          font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200
          ${featured ? 'text-3xl' : 'text-xl'}
        `}>
          <Link href={`/blog/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        
        {/* Description */}
        <p className={`
          text-gray-600 mb-6 leading-relaxed
          ${featured ? 'text-lg' : 'text-base'}
        `}>
          {article.description}
        </p>
        
        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-1 bg-gray-50 text-gray-600 text-sm rounded-lg border"
              >
                #{tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="text-sm text-gray-500">+{article.tags.length - 3} more</span>
            )}
          </div>
        )}
        
        {/* Footer avec meta informations */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {/* Temps de lecture */}
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} min read</span>
            </div>
            
            {/* Date de publication */}
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          {/* Lien de lecture */}
          <Link 
            href={`/blog/${article.slug}`}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            <span>Read more</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
} 