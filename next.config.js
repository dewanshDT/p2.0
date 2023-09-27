/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        protocol: "https",
      },
    ],
  },
}

module.exports = nextConfig
