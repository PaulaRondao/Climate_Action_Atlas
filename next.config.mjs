/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  serverExternalPackages: ['pino', 'pino-pretty'],
};

export default nextConfig;
