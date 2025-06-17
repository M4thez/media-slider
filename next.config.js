/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/media-slider",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
