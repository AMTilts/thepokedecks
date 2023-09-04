const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    images: {
      layoutRaw: true
    }
  },
  webpack: (config, { isServer }) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push({
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
  )

  fileLoaderRule.exclude = /\.svg$/i


    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        worker_threads: false,
      };
    }

    return config;
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      fs: false,
      child_process: false,
      worker_threads: false,
    },
  },
  ...nextConfig,
  images: {
    domains: ['raw.githubusercontent.com', 'mprice.one'],
  },
  future: {
    webpack5: true,
  },
};
