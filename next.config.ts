import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  
  // Cloudflare Pages static export
  output: "export",
  
  images: {
    qualities: [25, 50, 75, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers
  poweredByHeader: false,
  
  // Webpack config for Node.js polyfills
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
  async redirects() {
    return [
      // Service page redirects (original)
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

      // Location page redirects (WordPress pattern: /appliance-repair-[city])
      {
        source: "/appliance-repair-santa-rosa",
        destination: "/service-locations/santa-rosa",
        permanent: true,
      },
      {
        source: "/appliance-repair-petaluma",
        destination: "/service-locations/petaluma",
        permanent: true,
      },
      {
        source: "/appliance-repair-rohnert-park",
        destination: "/service-locations/rohnert-park",
        permanent: true,
      },
      {
        source: "/appliance-repair-sonoma",
        destination: "/service-locations/sonoma",
        permanent: true,
      },
      {
        source: "/appliance-repair-sebastopol",
        destination: "/service-locations/sebastopol",
        permanent: true,
      },
      {
        source: "/appliance-repair-windsor",
        destination: "/service-locations/windsor",
        permanent: true,
      },
      {
        source: "/appliance-repair-novato",
        destination: "/service-locations/novato",
        permanent: true,
      },
      {
        source: "/appliance-repair-san-rafael",
        destination: "/service-locations/san-rafael",
        permanent: true,
      },
      {
        source: "/appliance-repair-napa",
        destination: "/service-locations/napa",
        permanent: true,
      },
      {
        source: "/appliance-repair-marin-county",
        destination: "/service-locations/marin-county",
        permanent: true,
      },

      // Blog post redirects (WordPress posts at root level)
      {
        source: "/why-is-my-dryer-taking-so-long-to-dry-clothes",
        destination: "/blog/why-is-my-dryer-taking-so-long-to-dry-clothes",
        permanent: true,
      },
      {
        source: "/common-dishwasher-problems-and-how-to-prevent-them",
        destination: "/blog/common-dishwasher-problems-and-how-to-prevent-them",
        permanent: true,
      },
      {
        source: "/what-is-the-best-way-to-clean-stainless-steel-appliances",
        destination: "/blog/what-is-the-best-way-to-clean-stainless-steel-appliances",
        permanent: true,
      },
      {
        source: "/why-you-should-call-a-professional-to-repair-your-appliances",
        destination: "/blog/why-you-should-call-a-professional-to-repair-your-appliances",
        permanent: true,
      },
      {
        source: "/top-5-tips-for-buying-a-home-appliance",
        destination: "/blog/top-5-tips-for-buying-a-home-appliance",
        permanent: true,
      },
      {
        source: "/avoid-appliance-repair-scams",
        destination: "/blog/what-is-the-best-way-to-avoid-appliance-repair-scams",
        permanent: true,
      },

      // Blog index redirect
      {
        source: "/resources/blog",
        destination: "/blog",
        permanent: true,
      },

      // Scheduler confirmation redirect (old path)
      {
        source: "/resources/scheduler-confirmation",
        destination: "/scheduler-confirmation",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
