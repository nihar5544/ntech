/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets-global.website-files.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.iconscout.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.next.ntech.io",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                pathname: "/**",
            },
        ],
        unoptimized: true,
    },
    env: {
        imageBasePath: "",
    },
};

export default nextConfig;
