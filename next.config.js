/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"www.shsreicon.net",
            },
        ],
    },
};

module.exports = nextConfig;
