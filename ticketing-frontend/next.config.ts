import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/ticketing/:path*",
        destination: "https://ticketing.bujdi.xyz/:path*",
      },
    ];
  },
};

export default nextConfig;
