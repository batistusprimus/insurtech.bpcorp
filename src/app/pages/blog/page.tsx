'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import BlogFilters from '../../components/BlogFilters';
import ContactCTA from '../../components/ContactCTA';
import { SatelliteIcon, BuildingIcon, ListIcon, ChartIcon } from '../../components/Icons';
import { blogCategories } from '@/data/blog';
import { BlogFilters as BlogFiltersType, BlogArticle } from '@/types/blog';

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogFiltersType>({});
  const [allArticles, setAllArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

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
      console.log(`🔄 ${combined.length} articles rechargés`);
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
              <SatelliteIcon className="mr-2" size={16} />
              Intelligence Briefs
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Sentinel Briefs
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Intelligence, Not Opinion.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-300 mb-2">≤3min</div>
              <div className="text-blue-100 font-semibold">Read Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">60%</div>
              <div className="text-green-100 font-semibold">Data-Driven</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">4</div>
              <div className="text-purple-100 font-semibold">Core Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">100%</div>
              <div className="text-orange-100 font-semibold">Texas Focus</div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p className="text-2xl font-bold text-white">
                  This isn't a climate awareness blog.
                </p>
                <p className="text-xl text-blue-200">
                  This is operational intelligence for Texas-based teams managing risk, infrastructure, logistics, and revenue.
                </p>
                <p className="font-semibold text-white text-xl">
                  Short, specific, and always backed by data.
                </p>
              </div>
              
              {/* Category Preview */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🌪️</div>
                  <div className="text-white text-sm font-semibold">Weather Intel</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🏭</div>
                  <div className="text-white text-sm font-semibold">Industry Exposure</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="text-white text-sm font-semibold">Playbooks</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-white text-sm font-semibold">Sentinel Reports</div>
                </div>
              </div>
              
              {/* Editorial Promise Badge */}
              <div className="mt-8">
                <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-400/30 rounded-full text-green-200 text-lg font-semibold backdrop-blur-sm">
                  📊 Intelligence, Not Opinion
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
                📡 Dernière mise à jour: {lastRefresh.toLocaleTimeString('fr-FR')}
              </div>
              {allArticles.some(article => article.source === 'outrank') && (
                <div className="text-sm text-green-600 font-semibold">
                  ✨ {allArticles.filter(article => article.source === 'outrank').length} article(s) Outrank
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
                  🔄 Rafraîchir
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
              <p className="text-sm">⚠️ {error}</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                📌 Featured Briefs
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                📚 All Intelligence Briefs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {filteredArticles.length} brief{filteredArticles.length !== 1 ? 's' : ''} found
                {filters.category && ` in ${blogCategories.find(c => c.slug === filters.category)?.name}`}
                {filters.searchQuery && ` matching "${filters.searchQuery}"`}
                {allArticles.some(article => article.source === 'outrank') && (
                  <span className="block text-sm text-green-600 mt-2">
                    ✨ Includes latest articles from Outrank AI
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
                <div className="text-6xl mb-4">🔍</div>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                🧠 Editorial Promise
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
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                📨 Want Briefs Delivered Weekly?
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