/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.commercialcooling.com"],
  },
};

module.exports = nextConfig;
