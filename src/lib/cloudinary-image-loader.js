// Custom next/image loader. Cloudinary already serves optimized images (every URL in this
// codebase bakes in f_auto,q_auto or an explicit transform), so this returns Cloudinary/Unsplash
// URLs as-is instead of proxying through Vercel's Image Optimization — which bills/limits by
// unique source image and was 402-ing brand-new photos while cached ones kept working.
export default function cloudinaryImageLoader({ src, width, quality }) {
  if (src.includes("res.cloudinary.com")) {
    return src;
  }
  if (src.includes("images.unsplash.com")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    return url.toString();
  }
  return src;
}
