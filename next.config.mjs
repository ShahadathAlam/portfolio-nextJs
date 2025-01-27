/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allows production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};
