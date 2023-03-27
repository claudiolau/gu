/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://api.escuelajs.co/api/v1/categories"],
  },
};

module.exports = nextConfig;
