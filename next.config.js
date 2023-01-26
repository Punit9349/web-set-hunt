/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    JWT_SECRET:process.env.JWT_SECRET
  }
}

module.exports = nextConfig
