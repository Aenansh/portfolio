/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you're using
    unoptimized: false,
  },
};

export default nextConfig; 