import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for Vercel
  images: {
    domains: ['localhost'],
    unoptimized: false, // Enable for production
  },
  
  // Production optimizations
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // Headers for Vercel
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
