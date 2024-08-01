import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";

// Create Next.js plugin instance for next-intl
const withNextIntl = createNextIntlPlugin();

// PWA configuration
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 356 * 24 * 60 * 60, 
        },
      },
    },
    {
      urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "cloudflare-cdn",
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },

  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "unsplash.com",
      "i.pinimg.com",
    ],
    unoptimized: false,
  },
};

export default withNextIntl({ ...nextConfig, ...withPWA(pwaConfig) });
