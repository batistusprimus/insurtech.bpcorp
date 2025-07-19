import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactCTA from '../../components/ContactCTA';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { BlogArticle } from '@/types/blog';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Sentinel Briefs',
    };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Convert markdown-style content to HTML (simple conversion)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-black text-gray-900 mb-8 mt-12">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-10">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{line.slice(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">{line.slice(5)}</h4>;
        }
        
        // Bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-bold text-gray-900 mb-4">{line.slice(2, -2)}</p>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-700 mb-2 ml-4">{line.slice(2)}</li>;
        }
        if (/^\d+\./.test(line)) {
          return <li key={index} className="text-gray-700 mb-2 ml-4">{line.replace(/^\d+\.\s*/, '')}</li>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="mb-4"></div>;
        }
        
        // Regular paragraphs
        return <p key={index} className="text-gray-700 leading-relaxed mb-6">{line}</p>;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Article Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/pages/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <Link href={`/pages/blog?category=${article.category.slug}`} className="hover:text-white transition-colors">
                {article.category.name}
              </Link>
              <span>/</span>
              <span className="text-blue-300">{article.title}</span>
            </div>
          </nav>

          {/* Category Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="mr-2 text-lg">{article.category.icon}</span>
            {article.category.name}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed mb-12">
            {article.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{article.author.name}</div>
                <div className="text-blue-200 text-sm">{article.author.role}</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>

            {/* Reading Time */}
            <div className="flex items-center text-blue-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} min read</span>
            </div>

            {/* Published Date */}
            <div className="flex items-center text-blue-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            {/* Featured Badge */}
            {article.featured && (
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full">
                🔥 Featured
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <article className="prose prose-lg max-w-none p-12">
              {formatContent(article.content)}
            </article>

            {/* Tags */}
            <div className="px-12 pb-8">
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            More {article.category.name} Briefs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles
              .filter(a => a.category.id === article.category.id && a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id} 
                  href={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{relatedArticle.category.icon}</span>
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {relatedArticle.category.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{relatedArticle.readTime} min read</span>
                      <span className="mx-2">•</span>
                      <span>
                        {new Date(relatedArticle.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              📨 Get More Intelligence Like This
            </h2>
            <p className="text-xl text-blue-100 mb-8 opacity-90">
              Subscribe to the Sentinel Dispatch – critical weather intelligence delivered weekly to Texas business leaders.
            </p>
            <ContactCTA 
              type="contact" 
              variant="secondary" 
              size="lg"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Subscribe to Weekly Briefs
            </ContactCTA>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/pages/blog"
            className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Briefs
          </Link>
        </div>
      </div>
    </div>
  );
} 