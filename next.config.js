/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      WEB_URL: process.env.WEB_URL,
      API_URL:process.env.API_URL,
    },
    
  };

  module.exports = {
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };

/**
 * 
//  @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
