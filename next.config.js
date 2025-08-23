/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['sanity', '@sanity/ui', '@portabletext/react', 'styled-components', 'nanoid', 'mendoza'],
  experimental: {
    optimizePackageImports: ['sanity', '@sanity/ui', '@portabletext/react']
  }
}
module.exports = nextConfig
