/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos', 's3.eu-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
