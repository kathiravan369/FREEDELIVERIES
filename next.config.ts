

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/FREEDELIVERIES',
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

export default nextConfig;



