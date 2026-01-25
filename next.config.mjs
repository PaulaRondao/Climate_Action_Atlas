/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcFileReading: false, // important pour Vercel
  },
};

export default nextConfig;
