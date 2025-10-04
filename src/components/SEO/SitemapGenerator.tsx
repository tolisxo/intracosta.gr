import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapGenerator: React.FC = () => {
  const pages = [
    { url: 'https://www.intracosta.gr/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://www.intracosta.gr/international-transport', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://www.intracosta.gr/domestic-transport', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://www.intracosta.gr/warehousing', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.intracosta.gr/road-transport', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.intracosta.gr/intermodal-transport', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.intracosta.gr/special-transport', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.intracosta.gr/logistics-services', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.intracosta.gr/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://www.intracosta.gr/terms-of-service', priority: '0.3', changefreq: 'yearly' }
  ];

  return (
    <Helmet>
      {pages.map((page, index) => (
        <link
          key={index}
          rel="alternate"
          href={page.url}
          hrefLang="x-default"
        />
      ))}

      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </Helmet>
  );
};

export default SitemapGenerator;
