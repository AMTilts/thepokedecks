1/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['raw.githubusercontent.com', 'mprice.one']  
  },
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        worker_threads: false
      }
    }
    // config.resolve.fallback = { fs: false, child_process: false, worker_threads: false };
    return config;
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      "child_process": false,
      // and also other packages that are not found
    }
  },
}

 







