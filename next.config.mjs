/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
  },
  async rewrites() {
    return {
      // sanitas.segurosonline.net sirve la landing de Google Ads en la raíz
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'sanitas.segurosonline.net' }],
          destination: '/seguro-salud-sanitas',
        },
      ],
    }
  },
}

export default nextConfig
