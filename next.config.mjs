/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable turbopack (no custom webpack needed)
  turbopack: {},

  // New way to allow external packages for RSC backend
  serverExternalPackages: ["mongoose"],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
