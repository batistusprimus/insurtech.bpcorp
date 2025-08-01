export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number; // en minutes
  featured: boolean;
  image?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  source?: 'manual' | 'outrank'; // Source de l'article (pour l'intégration Outrank)
  createdAt?: string; // Pour les articles de l'API
  status?: 'draft' | 'published' | 'scheduled' | 'archived'; // Statut de l'article
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // emoji ou icon name
  color: string; // classe Tailwind CSS
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  featured?: boolean;
  searchQuery?: string;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
} 