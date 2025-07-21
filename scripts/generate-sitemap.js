import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.9 },
  { url: '/coverage', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.5 },
  
  // Language-specific URLs for local SEO
  { url: '/el/', changefreq: 'weekly', priority: 1.0 },
  { url: '/en/', changefreq: 'weekly', priority: 0.9 },
  { url: '/de/', changefreq: 'weekly', priority: 0.9 },
  { url: '/el/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/en/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/de/services', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.intracosta.gr' });
for (const link of links) sitemap.write(link);
sitemap.end();

streamToPromise(sitemap).then(sm => {
  const dest = resolve('dist', 'sitemap.xml');
  createWriteStream(dest).end(sm.toString());
});
