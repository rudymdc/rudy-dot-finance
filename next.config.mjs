/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://rudy.finance/$1',
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;