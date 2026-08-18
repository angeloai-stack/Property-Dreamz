/** Brand marketing video — Cloudinary CDN in production; local fallback for offline dev. */
export const BRAND_VIDEO_SRC =
  process.env.NEXT_PUBLIC_BRAND_VIDEO_URL ?? "/videos/pd-video-web.mp4";

/** Poster frame from the same Cloudinary asset (auto-generated). */
export const BRAND_VIDEO_POSTER =
  "https://res.cloudinary.com/dserzvrwe/video/upload/so_0,q_auto,f_auto/brand/pd-video-hd.jpg";

