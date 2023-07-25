/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "https://monster-web-clone-pe6b-jksn3i5vu-muhammedersln.vercel.app", // Match all pages
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Replace with the allowed origin, or "*" to allow all origins (not recommended in production)
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Add the allowed HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization", // Add the allowed headers
          },
        ],
      },
    ];
  },
    env: {
      WEB_URL: process.env.WEB_URL,
      API_URL:process.env.API_URL,
    },
    
  };



/**
 * 
//  @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

