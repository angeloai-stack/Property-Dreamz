/**
 * Upload brand video to Cloudinary.
 * Usage: node scripts/upload-brand-video.mjs [path-to-video]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal();

const cloud =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloud || !apiKey || !apiSecret) {
  console.error("Missing Cloudinary env vars in .env.local");
  process.exit(1);
}

cloudinary.config({ cloud_name: cloud, api_key: apiKey, api_secret: apiSecret });

const defaultVideo = path.join(root, "public/videos/pd-video-web.mp4");
const hdFallback = path.join(root, "public/videos/pd-video-hd.mp4");
const sourceFallback = "C:/Users/IngAn/Videos/PD-Video-HD.mp4";

const filePath =
  process.argv[2] ??
  (fs.existsSync(defaultVideo)
    ? defaultVideo
    : fs.existsSync(hdFallback)
      ? hdFallback
      : sourceFallback);

if (!fs.existsSync(filePath)) {
  console.error("Video not found:", filePath);
  process.exit(1);
}

const publicId = "brand/pd-video-hd";
const sizeMb = fs.statSync(filePath).size / 1024 / 1024;

if (sizeMb > 100) {
  console.error(
    `Video is ${sizeMb.toFixed(1)} MB — Cloudinary limit is 100 MB. Run ffmpeg compression first.`
  );
  process.exit(1);
}

console.log(`Uploading ${sizeMb.toFixed(1)} MB to Cloudinary…`);

cloudinary.uploader.upload(
  filePath,
  {
    resource_type: "video",
    public_id: publicId,
    overwrite: true,
  },
  (error, result) => {
    if (error) {
      console.error("Upload failed:", error.message ?? error);
      process.exit(1);
    }

    const deliveryUrl = `https://res.cloudinary.com/${cloud}/video/upload/q_auto,f_auto/${publicId}.mp4`;
    console.log("\nUpload OK");
    console.log("secure_url:", result?.secure_url);
    console.log("\nAdd to .env.local:");
    console.log(`NEXT_PUBLIC_BRAND_VIDEO_URL=${deliveryUrl}`);
  }
);
