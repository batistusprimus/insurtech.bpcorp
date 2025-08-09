import type { MetadataRoute } from 'next';
import { blogArticles } from '@/data/blog';
import { siteConfig } from './metadata';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, '');

  // Routes statiques principales
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/pages',
    '/pages/about',
    '/pages/blog',
    '/pages/careers',
    '/pages/contact',
    '/pages/coverage',
    '/pages/industries',
    '/pages/lead-gen',
    '/pages/resources',
    '/pages/sentinel',
    '/mentions-legales',
    '/politique-confidentialite',
  ].map((path) => ({
    url: `${siteUrl}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));

  // Articles statiques du dépôt
  const staticArticleRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Articles depuis l'API (Outrank)
  let apiArticleRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${siteUrl}/api/blog/articles?limit=100`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      const apiArticles = Array.isArray(data.articles) ? data.articles : [];
      apiArticleRoutes = apiArticles.map((a: any) => ({
        url: `${siteUrl}/blog/${a.slug}`,
        lastModified: new Date(a.updatedAt || a.publishedAt || Date.now()),
        changeFrequency: 'daily',
        priority: 0.8,
      }));
    }
  } catch {
    // Ignore les erreurs API pour ne pas casser le sitemap
  }

  // Déduplication par URL
  const allEntries = [...staticRoutes, ...staticArticleRoutes, ...apiArticleRoutes];
  const seen = new Set<string>();
  const merged: MetadataRoute.Sitemap = [];
  for (const entry of allEntries) {
    if (!seen.has(entry.url)) {
      seen.add(entry.url);
      merged.push(entry);
    }
  }

  return merged;
}


