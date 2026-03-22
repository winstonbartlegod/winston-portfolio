/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify — works with all blog MDX content
  output: 'export',

  // Required so next-mdx-remote is compiled correctly in dev
  transpilePackages: ['next-mdx-remote'],

  // Required for static image optimization
  images: {
    unoptimized: true,
  },

  // Clean URLs (no trailing slash)
  trailingSlash: false,

  // Compress assets
  compress: true,

  // Strict mode
  reactStrictMode: true,

  // MDX support
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
