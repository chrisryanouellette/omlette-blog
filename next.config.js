const mdx = require("@next/mdx");

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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

module.exports = withMDX(nextConfig);
