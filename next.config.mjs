const nextConfig = {
  images: {
    // Unsplash is the only approved external image host; add new domains explicitly here.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
