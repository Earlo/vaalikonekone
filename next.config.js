/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['yhcdzxbtocaendjxbvml.supabase.co'],
  },
};

module.exports = nextConfig;
