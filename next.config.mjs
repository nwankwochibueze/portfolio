/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Mobile-first sizes + retina support
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
};

export default nextConfig; // ✅ ESM export for .mjs