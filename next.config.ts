import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/appliance-repair/:slug*",
        destination: "/services/:slug*",
        permanent: true,
      },
      {
        source: "/locations/:slug*",
        destination: "/service-locations/:slug*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/brands/:slug*",
        destination: "/authorized-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
