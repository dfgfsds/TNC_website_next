/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'demo811.leotheme.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img.freepik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.primeabgb.com', pathname: '/**' },
      { protocol: 'https', hostname: 'digitalpcstore.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ecomapi.ftdigitalsolutions.org', pathname: '/**' },
      { protocol: 'https', hostname: 't4.ftcdn.net', pathname: '/**' },
      { protocol: 'https', hostname: 'semantic-ui.com', pathname: '/**' },
      { protocol: 'https', hostname: 'pcbros.tech', pathname: '/**' },
      { protocol: 'https', hostname: 'www.tncomputers.in', pathname: '/**' },
      { protocol: 'https', hostname: 'play.google.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 768, 828, 1024, 1200, 1280, 1536, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
              style-src 'self' 'unsafe-inline' https:;
              img-src 'self' data: https:;
              font-src 'self' data: https:;
              connect-src 'self' https:;
              frame-src 'self' https:;
            `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
