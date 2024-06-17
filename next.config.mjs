/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gogocdn.net",
                pathname: "/**",
                port: ""
            },
            {
                protocol: "https",
                hostname: "p7.hiclipart.com",
                pathname: "/preview/**",
                port: ""
            }
        ]
    }
};

export default nextConfig;
