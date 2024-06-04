/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["images.microcms-assets.io"],
    // domains: ['144.126.136.135'],
    domains: ['localhost', 'service-zsx5.onrender.com'],
  },
};

module.exports = nextConfig;
  