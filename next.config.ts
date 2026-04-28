import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [process.env.NEXT_PUBLIC_DEV_NETWORK || ""], // 개발 네트워크 허용 --- IGNORE ---
};

export default nextConfig;
