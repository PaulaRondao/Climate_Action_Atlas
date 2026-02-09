/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    authInterrupts: true,
  },
  serverExternalPackages: ['pino', 'pino-pretty'],
};

export default nextConfig;
