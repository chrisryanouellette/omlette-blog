/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT: true,
  },
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/posts/:slug/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
