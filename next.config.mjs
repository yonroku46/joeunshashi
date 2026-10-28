/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  distDir: process.env.BUILD_DIR || '.next',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: '**.naver.net',
      },
      {
        protocol: 'https',
        hostname: '**.phinf.naver.net',
      },
      {
        protocol: 'https',
        hostname: 'blogthumb.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'blogfiles.pstatic.net',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_ROOT || '/api'}/:path*`,
        destination: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost'}:${process.env.NEXT_PUBLIC_API_PORT || '8080'}${process.env.NEXT_PUBLIC_API_ROOT || '/api'}/:path*`
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  }
};

export default nextConfig;
