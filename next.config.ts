import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/book-safari.html',
        destination: '/booking',
        permanent: true,
      },
      {
        source: '/safari-yala.html',
        destination: '/safari',
        permanent: true,
      },
      {
        source: '/places-to-stay-yala-national-park.html',
        destination: '/stay',
        permanent: true,
      },
      {
        source: '/yala-safari-packages.html',
        destination: '/safari',
        permanent: true,
      },
      {
        source: '/yala-safari-tour.html',
        destination: '/safari',
        permanent: true,
      },
      {
        source: '/tours.html',
        destination: '/tours',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
