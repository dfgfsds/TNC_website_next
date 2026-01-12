/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo811.leotheme.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',

      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',

      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',

        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.primeabgb.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'digitalpcstore.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ecomapi.ftdigitalsolutions.org',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'], // 🔥 IMPORTANT
    deviceSizes: [320, 420, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
};

module.exports = nextConfig;
