import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.intracosta.gr' });
for (const link of links) sitemap.write(link);
sitemap.end();

streamToPromise(sitemap).then(sm => {
  const dest = resolve('dist', 'sitemap.xml');
  createWriteStream(dest).end(sm.toString());
});
