/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  eslint: {
    dirs: [
      'components',
      'lib',
      'pages',
      'styles',
    ],
  },
  async redirects() {
    return [
      {
        source: '/in',
        destination: 'https://www.linkedin.com/in/patrickcarneiro',
        permanent: false,
      },
      {
        source: '/gh',
        destination: 'https://github.com/ptrkc',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
