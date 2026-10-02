import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/invest", destination: "/", permanent: true }];
  },
};

export default nextConfig;
