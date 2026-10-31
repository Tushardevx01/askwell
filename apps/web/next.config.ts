import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@askwell/shared", "@askwell/db"],
  reactStrictMode: true,
};

export default nextConfig;
