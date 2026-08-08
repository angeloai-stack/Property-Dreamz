import createNextIntlPlugin from "next-intl/plugin";

// Next.js config — images.remotePatterns plus the next-intl plugin wiring in src/i18n/request.ts.
const nextConfig = {
  images: {
    // Approved external image hosts; add new domains explicitly here.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config) => {
    // Silences a harmless webpack cache warning: next-intl ships a file with a dynamic
    // import() whose specifier isn't statically analyzable, which webpack can't resolve
    // for its persistent-cache dependency graph. Doesn't affect the build or runtime.
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
