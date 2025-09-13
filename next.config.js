/** @type {import('next').NextConfig} */
const nextConfig = {
  // ULTRA MINIMAL CONFIG FOR MAXIMUM SPEED
  reactStrictMode: false,
  poweredByHeader: false,
  compress: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  generateEtags: false,
};

module.exports = nextConfig;