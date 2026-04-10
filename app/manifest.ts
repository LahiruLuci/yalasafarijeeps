import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yala Safari Jeeps',
    short_name: 'Yala Safari',
    description: 'Premium Safari Experience in Yala National Park, Sri Lanka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1914',
    theme_color: '#D07A3F',
    icons: [
      {
        src: '/images/logo-2.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
