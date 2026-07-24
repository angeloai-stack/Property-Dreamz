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
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
