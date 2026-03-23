/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org', 'images.unsplash.com', 'iconlogovector.com', 'www.kindpng.com', 'seeklogo.com']
  }
}

module.exports = nextConfig
