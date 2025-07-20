'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import BlogFilters from '../../components/BlogFilters';
import ContactCTA from '../../components/ContactCTA';
import { SatelliteIcon, BuildingIcon, ListIcon, ChartIcon } from '../../components/Icons';
import CategoryIcon from '../../components/CategoryIcon';
import { blogCategories } from '@/data/blog';
import { BlogFilters as BlogFiltersType, BlogArticle } from '@/types/blog';

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogFiltersType>({});
  const [allArticles, setAllArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Fonction pour déterminer le type d'article de manière intelligente
  const getArticleType = (article: BlogArticle) => {
    const title = article.title.toLowerCase();
    const description = article.description.toLowerCase();
    const tags = article.tags.map(tag => tag.toLowerCase());
    const content = article.content.toLowerCase();
    
    // Mots-clés pour différents types d'articles
    const marketingKeywords = ['marketing', 'lead generation', 'strategy', 'campaign', 'conversion', 'roi', 'growth', 'acquisition'];
    const researchKeywords = ['research', 'analysis', 'study', 'data', 'statistics', 'findings', 'report', 'insights'];
    const technicalKeywords = ['implementation', 'api', 'technical', 'development', 'integration', 'code', 'system'];
    const industryKeywords = ['industry', 'sector', 'market', 'trends', 'outlook', 'forecast', 'intelligence'];
    
    // Compter les occurrences de chaque type
    const marketingScore = marketingKeywords.reduce((score, keyword) => 
      score + (title.includes(keyword) ? 3 : 0) + 
      (description.includes(keyword) ? 2 : 0) + 
      (tags.some(tag => tag.includes(keyword)) ? 2 : 0) + 
      (content.includes(keyword) ? 1 : 0), 0);
      
    const researchScore = researchKeywords.reduce((score, keyword) => 
      score + (title.includes(keyword) ? 3 : 0) + 
      (description.includes(keyword) ? 2 : 0) + 
      (tags.some(tag => tag.includes(keyword)) ? 2 : 0) + 
      (content.includes(keyword) ? 1 : 0), 0);
      
    const technicalScore = technicalKeywords.reduce((score, keyword) => 
      score + (title.includes(keyword) ? 3 : 0) + 
      (description.includes(keyword) ? 2 : 0) + 
      (tags.some(tag => tag.includes(keyword)) ? 2 : 0) + 
      (content.includes(keyword) ? 1 : 0), 0);
      
    const industryScore = industryKeywords.reduce((score, keyword) => 
      score + (title.includes(keyword) ? 3 : 0) + 
      (description.includes(keyword) ? 2 : 0) + 
      (tags.some(tag => tag.includes(keyword)) ? 2 : 0) + 
      (content.includes(keyword) ? 1 : 0), 0);
    
    // Déterminer le type avec le score le plus élevé
    const scores = [
      { type: 'Marketing team report', score: marketingScore },
      { type: 'Research team analysis', score: researchScore },
      { type: 'Technical documentation', score: technicalScore },
      { type: 'Industry intelligence brief', score: industryScore }
    ];
    
    const bestMatch = scores.reduce((best, current) => 
      current.score > best.score ? current : best);
    
    // Si aucun score significatif, retourner un type par défaut
    return bestMatch.score > 0 ? bestMatch.type : 'Strategic insights report';
  };

  // Charger les articles depuis l'API
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await fetch(`/api/blog/articles?t=${Date.now()}`);
        const data = await response.json();
        const apiArticles = data.articles || [];
        
        // Charger aussi les articles statiques
        const { blogArticles: staticArticles } = await import('@/data/blog');
        
        // Combiner API + statiques
        const combined = [...apiArticles, ...staticArticles];
        
        setAllArticles(combined);
        setError(null);
        setLastRefresh(new Date());
        console.log(`✅ ${combined.length} articles chargés`);
      } catch (err) {
        console.error('Erreur:', err);
        const { blogArticles: staticArticles } = await import('@/data/blog');
        setAllArticles(staticArticles);
        setError('Erreur API, articles statiques affichés');
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
    const interval = setInterval(fetchArticles, 30000);
    return () => clearInterval(interval);
  }, []);

  // Fonction de rafraîchissement manuel
  const refreshArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blog/articles?t=${Date.now()}`);
      const data = await response.json();
      const apiArticles = data.articles || [];
      const { blogArticles: staticArticles } = await import('@/data/blog');
      const combined = [...apiArticles, ...staticArticles];
      
      setAllArticles(combined);
      setError(null);
      setLastRefresh(new Date());
              console.log(`Refresh: ${combined.length} articles rechargés`);
    } catch (err) {
      console.error('Erreur refresh:', err);
      setError('Erreur refresh');
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = useMemo(() => {
    let articles = [...allArticles];

    // Apply category filter
    if (filters.category) {
      articles = articles.filter(article => article.category.slug === filters.category);
    }

    // Apply featured filter
    if (filters.featured) {
      articles = articles.filter(article => article.featured);
    }

    // Apply search filter
    if (filters.searchQuery && filters.searchQuery.trim()) {
      const searchQuery = filters.searchQuery.toLowerCase().trim();
      articles = articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery) ||
        article.description.toLowerCase().includes(searchQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
        article.category.name.toLowerCase().includes(searchQuery)
      );
    }

    // Sort by date (newest first)
    return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [allArticles, filters]);

  const featuredArticles = useMemo(() => {
    return allArticles.filter(article => article.featured);
  }, [allArticles]);

  const coreCategories = [
    {
      icon: <SatelliteIcon className="text-blue-600" size={32} />,
      title: 'Weather Intelligence',
      description: 'Live event breakdowns, pattern forecasting, and impact reports',
      example: 'ex: "Harvey vs Beryl: Same Path, Different Economics"'
    },
    {
      icon: <BuildingIcon className="text-blue-600" size={32} />,
      title: 'Industry Exposure',
      description: 'Vertical-specific briefs for logistics, manufacturing, agriculture, energy',
      example: 'ex: "Power Loss in Cold Chains – The $2M/day Problem"'
    },
    {
      icon: <ListIcon className="text-blue-600" size={32} />,
      title: 'Playbooks',
      description: 'Tactical briefs: when to send, who to target, how to convert',
      example: 'ex: "What to Do 24h After a Tornado Touches Down"'
    },
    {
      icon: <ChartIcon className="text-blue-600" size={32} />,
      title: 'Sentinel Reports',
      description: 'Raw data releases, Q&A with analysts, and methodology explainers',
      example: 'ex: "How We Score Urgency – Behind the 91.7% Accuracy"'
    }
  ];

  const editorialPromise = [
    { percentage: '60%', element: 'data' },
    { percentage: '30%', element: 'urgency' },
    { percentage: '10%', element: 'partnership' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              AI-Powered Intelligence Platform
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Sentinel Intelligence
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Automated insights, intelligent classification, real-time analysis.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">24/7</div>
              <div className="text-blue-100 font-semibold">Auto-Publishing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">5+</div>
              <div className="text-green-100 font-semibold">Content Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">AI</div>
              <div className="text-purple-100 font-semibold">Smart Classification</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">100%</div>
              <div className="text-orange-100 font-semibold">Business Focus</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  Enterprise-grade content intelligence platform.
                </p>
                <p className="text-xl text-blue-200">
                  Our AI system automatically generates, classifies, and publishes specialized business content across marketing, research, technical, and industry verticals.
                </p>
                <p className="font-semibold text-white text-xl">
                  Intelligent automation. Professional quality. Zero manual intervention.
                </p>
              </div>
              
              {/* Content Types Preview */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white mb-2 flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold">Marketing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white mb-2 flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold">Research</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white mb-2 flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold">Technical</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white mb-2 flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold">Industry</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white mb-2 flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold">Strategic</div>
                </div>
              </div>
              
              {/* Technology Badge */}
              <div className="mt-8">
                <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-400/30 rounded-full text-green-200 text-lg font-semibold backdrop-blur-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Powered by Advanced AI Technology
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <button 
                  onClick={() => {
                    const featuredSection = document.getElementById('featured-briefs');
                    const allBriefsSection = document.getElementById('all-briefs');
                    const targetSection = featuredSection || allBriefsSection;
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Read Latest Briefs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Filters */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilters 
            categories={blogCategories}
            onFiltersChange={setFilters}
            currentFilters={filters}
          />
          
          {/* Status et Refresh */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl p-4 shadow-sm border">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Last updated: {lastRefresh.toLocaleTimeString('en-US')}
              </div>
              {allArticles.some(article => article.source === 'outrank') && (
                <div className="text-sm text-green-600 font-semibold">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {allArticles.filter(article => article.source === 'outrank').length} {
                      allArticles.filter(article => article.source === 'outrank').length === 1 
                        ? getArticleType(allArticles.filter(article => article.source === 'outrank')[0]).toLowerCase()
                        : 'specialized reports'
                    }
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={refreshArticles}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Rafraîchissement...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Refresh
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="py-8 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-xl">
              <p className="text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading latest intelligence briefs...</p>
            </div>
          </div>
        </div>
      )}

      {/* Featured Briefs Section */}
      {!loading && featuredArticles.length > 0 && (
        <div id="featured-briefs" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 inline-flex items-center">
              <svg className="w-12 h-12 mr-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Featured Briefs
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Critical intelligence briefings selected by our editorial team for immediate action.
              </p>
            </div>
            
            <div className="space-y-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  featured={true} 
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Articles Section */}
      {!loading && (
        <div id="all-briefs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 inline-flex items-center">
              <svg className="w-12 h-12 mr-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              All Intelligence Briefs
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {filteredArticles.length} brief{filteredArticles.length !== 1 ? 's' : ''} found
                {filters.category && ` in ${blogCategories.find(c => c.slug === filters.category)?.name}`}
                {filters.searchQuery && ` matching "${filters.searchQuery}"`}
                {allArticles.some(article => article.source === 'outrank') && (
                  <span className="block text-sm text-green-600 mt-2 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                    Includes latest specialized content
                  </span>
                )}
              </p>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    featured={false} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4 flex justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No briefs found</h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => setFilters({})}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Core Categories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              <SatelliteIcon className="inline mr-2 text-blue-600" size={48} />
              Core Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      • {category.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {category.description}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      → {category.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial Promise Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 inline-flex items-center justify-center">
                <svg className="w-12 h-12 mr-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Editorial Promise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {editorialPromise.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg">
                    {item.percentage}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.element}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                No trends. No climate panic. Just what's happening, what it costs, and how to respond first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-xl">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-8 inline-flex items-center justify-center">
                <svg className="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Want Briefs Delivered Weekly?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to the Sentinel Dispatch – the only climate ops report built for Texas B2B operators.
              </p>
              <ContactCTA 
                type="contact" 
                variant="secondary" 
                size="lg"
                className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Subscribe to Weekly Dispatch
              </ContactCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 