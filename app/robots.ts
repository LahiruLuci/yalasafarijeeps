import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://yalasafarijeeps.com/sitemap.xml',
    host: 'https://yalasafarijeeps.com',
  };
}
