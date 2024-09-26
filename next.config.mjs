/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',      // Use 'https' if your image URL uses HTTPS
            hostname: 'm.media-amazon.com', // Replace with the external image domain
          },
    ],
  },
};

export default nextConfig;
