import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yalasafarijeeps.com';

  const routes = [
    '',
    '/about',
    '/contact',
    '/safari',
    '/stay',
    '/tours',
    '/booking',
    '/safari/morning',
    '/safari/evening',
    '/safari/tailor-made',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
