/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdnv2.tgdd.vn',
            },
            {
                protocol: 'https',
                hostname: 'cdn.tgdd.vn',
            },
        ],
    },
}

export default nextConfig
