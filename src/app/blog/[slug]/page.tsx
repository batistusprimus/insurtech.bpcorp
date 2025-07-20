import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactCTA from '../../components/ContactCTA';
import CategoryIcon from '../../components/CategoryIcon';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { BlogArticle } from '@/types/blog';

// Fonction pour charger un article depuis l'API ou les données statiques
async function getArticleFromApiOrStatic(slug: string): Promise<BlogArticle | null> {
  try {
    // D'abord, essayer de charger depuis l'API (articles Outrank)
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://insurtech.bpcorp.eu'}/api/blog/articles?limit=100`, {
      cache: 'no-store' // Toujours charger la version la plus récente
    });
    
    if (response.ok) {
      const data = await response.json();
      const apiArticle = data.articles?.find((article: BlogArticle) => article.slug === slug);
      if (apiArticle) {
        console.log(`✅ Article trouvé dans l'API: ${apiArticle.title}`);
        return apiArticle;
      }
    }
  } catch (error) {
    console.warn('⚠️ Erreur lors du chargement de l\'API, utilisation des données statiques:', error);
  }
  
  // Sinon, utiliser les données statiques
  const staticArticle = getArticleBySlug(slug);
  if (staticArticle) {
    console.log(`✅ Article trouvé dans les données statiques: ${staticArticle.title}`);
    return staticArticle;
  }
  return null;
}

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
  const article = await getArticleFromApiOrStatic(slug);
  
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
      authors: article.author ? [article.author.name] : undefined,
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
  const article = await getArticleFromApiOrStatic(slug);

  if (!article) {
    notFound();
  }

  // Advanced markdown-to-JSX converter
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;
    
    // Function to parse inline markdown (bold, links)
    const parseInlineMarkdown = (text: string, key: string): (string | JSX.Element)[] => {
      const elements: (string | JSX.Element)[] = [];
      const segments = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/);
      
      segments.forEach((segment, index) => {
        if (!segment) return;
        
        // Bold text **text**
        if (segment.startsWith('**') && segment.endsWith('**')) {
          const boldText = segment.slice(2, -2);
          elements.push(
            <strong key={`${key}-bold-${index}`} className="font-bold">
              {boldText}
            </strong>
          );
        }
        // Links [text](url)
        else if (segment.match(/^\[.*?\]\(.*?\)$/)) {
          const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (match) {
            const [, linkText, url] = match;
            elements.push(
              <a key={`${key}-link-${index}`} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 underline">
                {linkText}
              </a>
            );
          }
        }
        // Regular text
        else {
          elements.push(segment);
        }
      });
      
      return elements.filter(part => part !== '');
    };
    
    while (i < lines.length) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Headers
      if (trimmedLine.startsWith('# ')) {
        const content = parseInlineMarkdown(trimmedLine.slice(2), `h1-${i}`);
        elements.push(<h1 key={i} className="text-4xl font-black text-gray-900 mb-8 mt-12">{content}</h1>);
      }
      else if (trimmedLine.startsWith('## ')) {
        const content = parseInlineMarkdown(trimmedLine.slice(3), `h2-${i}`);
        elements.push(<h2 key={i} className="text-3xl font-bold text-gray-900 mb-6 mt-10">{content}</h2>);
      }
      else if (trimmedLine.startsWith('### ')) {
        const content = parseInlineMarkdown(trimmedLine.slice(4), `h3-${i}`);
        elements.push(<h3 key={i} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{content}</h3>);
      }
      else if (trimmedLine.startsWith('#### ')) {
        const content = parseInlineMarkdown(trimmedLine.slice(5), `h4-${i}`);
        elements.push(<h4 key={i} className="text-xl font-bold text-gray-900 mb-3 mt-6">{content}</h4>);
      }
      
      // Images ![alt](url)
      else if (trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)) {
        const match = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (match) {
          const [, alt, src] = match;
          elements.push(
            <div key={i} className="my-8 text-center">
              <img 
                src={src} 
                alt={alt} 
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                loading="lazy"
              />
              {alt && <p className="text-sm text-gray-600 mt-2 italic">{alt}</p>}
            </div>
          );
        }
      }
      
      // Tables
      else if (trimmedLine.includes('|') && lines[i + 1]?.includes('|')) {
        const tableLines: string[] = [];
        let j = i;
        
        // Collect all table lines
        while (j < lines.length && lines[j].trim().includes('|')) {
          tableLines.push(lines[j].trim());
          j++;
        }
        
        if (tableLines.length >= 2) {
          const headerRow = tableLines[0].split('|').map(cell => cell.trim()).filter(cell => cell);
          const separatorRow = tableLines[1];
          const dataRows = tableLines.slice(2).map(row => 
            row.split('|').map(cell => cell.trim()).filter(cell => cell)
          );
          
          // Check if it's a valid table (separator row has dashes)
          if (separatorRow.includes('-')) {
            elements.push(
              <div key={i} className="my-8 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      {headerRow.map((header, idx) => (
                        <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          {parseInlineMarkdown(header, `table-header-${i}-${idx}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataRows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {parseInlineMarkdown(cell, `table-cell-${i}-${rowIdx}-${cellIdx}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            i = j - 1; // Skip processed table lines
          }
        }
      }
      
      // Quote blocks
      else if (trimmedLine.startsWith('> ')) {
        const quoteLines: string[] = [];
        let j = i;
        
        while (j < lines.length && lines[j].trim().startsWith('> ')) {
          quoteLines.push(lines[j].trim().slice(2));
          j++;
        }
        
        const quoteContent = quoteLines.join(' ');
        elements.push(
          <blockquote key={i} className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50 italic text-gray-700">
            {parseInlineMarkdown(quoteContent, `quote-${i}`)}
          </blockquote>
        );
        i = j - 1;
      }
      
      // Lists
      else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        const listItems: string[] = [];
        let j = i;
        
        while (j < lines.length && (lines[j].trim().startsWith('- ') || lines[j].trim().startsWith('* '))) {
          listItems.push(lines[j].trim().slice(2));
          j++;
        }
        
        elements.push(
          <ul key={i} className="list-disc list-inside my-6 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {parseInlineMarkdown(item, `list-${i}-${idx}`)}
              </li>
            ))}
          </ul>
        );
        i = j - 1;
      }
      
      // Numbered lists
      else if (/^\d+\./.test(trimmedLine)) {
        const listItems: string[] = [];
        let j = i;
        
        while (j < lines.length && /^\d+\./.test(lines[j].trim())) {
          listItems.push(lines[j].trim().replace(/^\d+\.\s*/, ''));
          j++;
        }
        
        elements.push(
          <ol key={i} className="list-decimal list-inside my-6 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {parseInlineMarkdown(item, `numlist-${i}-${idx}`)}
              </li>
            ))}
          </ol>
        );
        i = j - 1;
      }
      
      // Empty lines
      else if (trimmedLine === '') {
        elements.push(<div key={i} className="mb-4"></div>);
      }
      
      // Regular paragraphs
      else {
        const content = parseInlineMarkdown(trimmedLine, `p-${i}`);
        elements.push(
          <p key={i} className="text-gray-700 leading-relaxed mb-6">
            {content}
          </p>
        );
      }
      
      i++;
    }
    
    return elements;
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
                            <CategoryIcon type={article.category.icon} size={20} className="mr-2" />
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
                      <CategoryIcon type={relatedArticle.category.icon} size={32} className="mr-3" />
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