import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const imageSizing = {
  // Keep sizes tight to avoid generating an excessive srcset while still covering common devices.
  deviceSizes: [320, 375, 414, 640, 750, 828, 1080, 1200, 1440, 1920],
  imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
} satisfies NonNullable<NextConfig["images"]>

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  
  // Cloudflare Pages static export
  output: "export",
  
  images:
    process.env.NODE_ENV === "development"
      ? {
          // Dev server only: Turbopack currently throws `next-image-missing-loader` with `images.loaderFile`.
          // Also disable the Image Optimization API because this repo uses `{ output: "export" }`.
          // (Without `unoptimized: true`, Next will throw `export-image-api` on any page that renders <Image />.)
          ...imageSizing,
          unoptimized: true,
        }
      : {
          ...imageSizing,
          loader: "custom",
          // Keep the loader in .mjs so it can be resolved consistently.
          loaderFile: "./src/lib/cfImageLoader.mjs",
        },
  
  // Optional: add trailing slashes for cleaner URLs
  // trailingSlash: true,
  
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
      // Host normalization: force non-www (canonical host)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kellysappliancerepair.com",
          },
        ],
        destination: "https://kellysappliancerepair.com/:path*",
        permanent: true,
      },
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
      // All legacy city URLs redirect to new /service-locations/* structure (GSC shows 0 backlinks/0 clicks)
      {
        source: "/appliance-repair-petaluma",
        destination: "/service-locations/petaluma",
        permanent: true,
      },
      {
        source: "/appliance-repair-santa-rosa",
        destination: "/service-locations/santa-rosa",
        permanent: true,
      },
      {
        source: "/appliance-repair-san-rafael",
        destination: "/service-locations/san-rafael",
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
        source: "/appliance-repair-napa",
        destination: "/service-locations/napa",
        permanent: true,
      },
      {
        source: "/appliance-repair-novato",
        destination: "/service-locations/novato",
        permanent: true,
      },
      {
        source: "/appliance-repair-windsor",
        destination: "/service-locations/windsor",
        permanent: true,
      },
      {
        source: "/appliance-repair-marin-county",
        destination: "/service-locations/marin-county",
        permanent: true,
      },
      {
        source: "/appliance-repair-rohnert-park",
        destination: "/service-locations/rohnert-park",
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
      {
        source: "/resources/blog-2",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/resources/blog-2/:path*",
        destination: "/blog",
        permanent: true,
      },

      // Scheduler confirmation redirect (old path)
      {
        source: "/resources/scheduler-confirmation",
        destination: "/scheduler-confirmation",
        permanent: true,
      },

      // Service area redirect (old WordPress page)
      {
        source: "/service-area",
        destination: "/service-locations",
        permanent: true,
      },

      // Authorized service sub-paths redirects
      {
        source: "/authorized-service/refrigerator-repair",
        destination: "/services/refrigerator-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/washer-dryer-repair",
        destination: "/services/washer-dryer-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/range-oven-repair",
        destination: "/services/oven-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/dishwasher-repair",
        destination: "/services/dishwasher-repair",
        permanent: true,
      },

      // Additional blog post redirects
      {
        source: "/what-is-the-best-way-to-clean-a-stainless-steel-fridge",
        destination: "/blog/what-is-the-best-way-to-clean-stainless-steel-appliances",
        permanent: true,
      },

      // WordPress legacy paths
      {
        source: "/portfolio-items",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-test",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/fusion_tb_category/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/range-oven-repair",
        destination: "/services/oven-repair",
        permanent: true,
      },

      // Design preview test page cleanup
      {
        source: "/design-preview",
        destination: "/",
        permanent: true,
      },

      // Trailing slash redirects for legacy city URLs (redirect directly to new URLs)
      {
        source: "/appliance-repair-petaluma/",
        destination: "/service-locations/petaluma",
        permanent: true,
      },
      {
        source: "/appliance-repair-santa-rosa/",
        destination: "/service-locations/santa-rosa",
        permanent: true,
      },
      {
        source: "/appliance-repair-san-rafael/",
        destination: "/service-locations/san-rafael",
        permanent: true,
      },
      {
        source: "/appliance-repair-sonoma/",
        destination: "/service-locations/sonoma",
        permanent: true,
      },
      {
        source: "/appliance-repair-sebastopol/",
        destination: "/service-locations/sebastopol",
        permanent: true,
      },
      {
        source: "/appliance-repair-napa/",
        destination: "/service-locations/napa",
        permanent: true,
      },
      {
        source: "/appliance-repair-novato/",
        destination: "/service-locations/novato",
        permanent: true,
      },
      {
        source: "/appliance-repair-windsor/",
        destination: "/service-locations/windsor",
        permanent: true,
      },
      {
        source: "/appliance-repair-marin-county/",
        destination: "/service-locations/marin-county",
        permanent: true,
      },
      {
        source: "/appliance-repair-rohnert-park/",
        destination: "/service-locations/rohnert-park",
        permanent: true,
      },
      // Blog post trailing slash redirects
      {
        source: "/common-dishwasher-problems-and-how-to-prevent-them/",
        destination: "/blog/common-dishwasher-problems-and-how-to-prevent-them",
        permanent: true,
      },
      {
        source: "/why-is-my-dryer-taking-so-long-to-dry-clothes/",
        destination: "/blog/why-is-my-dryer-taking-so-long-to-dry-clothes",
        permanent: true,
      },
      {
        source: "/what-is-the-best-way-to-clean-stainless-steel-appliances/",
        destination: "/blog/what-is-the-best-way-to-clean-stainless-steel-appliances",
        permanent: true,
      },
      {
        source: "/why-you-should-call-a-professional-to-repair-your-appliances/",
        destination: "/blog/why-you-should-call-a-professional-to-repair-your-appliances",
        permanent: true,
      },
      {
        source: "/top-5-tips-for-buying-a-home-appliance/",
        destination: "/blog/top-5-tips-for-buying-a-home-appliance",
        permanent: true,
      },
      {
        source: "/avoid-appliance-repair-scams/",
        destination: "/blog/what-is-the-best-way-to-avoid-appliance-repair-scams",
        permanent: true,
      },
      // Authorized service trailing slash redirects
      {
        source: "/authorized-service/dishwasher-repair/",
        destination: "/services/dishwasher-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/refrigerator-repair/",
        destination: "/services/refrigerator-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/washer-dryer-repair/",
        destination: "/services/washer-dryer-repair",
        permanent: true,
      },
      {
        source: "/authorized-service/range-oven-repair/",
        destination: "/services/oven-repair",
        permanent: true,
      },
      // Other trailing slash redirects
      {
        source: "/portfolio-items/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/range-oven-repair/",
        destination: "/services/oven-repair",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
