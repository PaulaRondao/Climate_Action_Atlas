/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty'],
  },
};

export default nextConfig;
