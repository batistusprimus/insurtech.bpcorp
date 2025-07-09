import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Sentinel Shield',
  description: 'Transform weather events into business opportunities with our real-time climate intelligence and qualified B2B leads.',
  url: 'https://insurtech.bpcorp.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/sentinelshield',
    github: 'https://github.com/sentinelshield',
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'climate intelligence',
    'B2B leads',
    'weather events',
    'disaster recovery',
    'insurance leads',
    'real-time detection',
    'qualified leads',
    'Texas',
  ],
  authors: [
    {
      name: 'BP LES CANNISSES KFT',
      url: siteConfig.url,
    },
  ],
  creator: 'BP LES CANNISSES KFT',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@sentinelshield',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}; 