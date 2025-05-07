/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://www.next.coindelta.io/"],
        loader: "imgix",
        path: "",
        unoptimized: true,
      },
      env: {
        imageBasePath: "",
      },
};

export default nextConfig;
