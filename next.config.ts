import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.ts
const isProd = process.env.NODE_ENV === 'production'

// If this is a *project page* (https://USERNAME.github.io/REPO),
// set your repo name here. For a *user/organization page*
// (https://USERNAME.github.io) leave repoName = ''.
const repoName = 'uplbchi.github.io' // <-- change to your repo (or '')

export default {
  output: 'export',              // writes static site to /out
  images: { unoptimized: true }, // next/image compatible with static export
  trailingSlash: true,           // avoids 404s on GH Pages
  ...(isProd && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
} as const
