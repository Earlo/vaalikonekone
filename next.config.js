/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'yhcdzxbtocaendjxbvml.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
