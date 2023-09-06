/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: process.env["BACKEND_PROTOCOL"],
            hostname: process.env["BACKEND_HOSTNAME"],
            port: process.env["BACKEND_HOST_PORT"],
            pathname: '/uploads/**',
          },
        ],
      },
}

module.exports = nextConfig
