/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      WEB_URL: process.env.WEB_URL,
      API_URL:process.env.API_URL,
    },
    
  };

  module.exports = {
    async rewrites() {
      return [
        {
          source: '/ecommerce-api/:path*',
          destination: 'https://api.monsternotebook.com/ecommerce-api/:path*',
        },
      ];
    },
  };

/**
 * 
//  @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
