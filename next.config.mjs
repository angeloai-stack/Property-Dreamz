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
    // Cloudinary already optimizes every image we serve (f_auto,q_auto baked into the URLs),
    // so skip Vercel's Image Optimization proxy entirely — it bills/limits per unique source
    // image and was returning 402 for newly-uploaded photos. See src/lib/cloudinary-image-loader.js.
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-image-loader.js",
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
