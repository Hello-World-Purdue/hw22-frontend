/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    // cleans up console logs in production mode
    removeConsole: {
      exclude: ["error"],
    },
  },
};

module.exports = nextConfig;
