import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["http://192.168.0.6:3000", "192.168.0.6"],
};

export default nextConfig;
