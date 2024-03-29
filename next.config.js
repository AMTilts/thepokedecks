const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            pathname: '/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/**',
            pathname: '/PokeMiners/pogo_assets/master/Images/Pokemon/**'
        }
        
    ]
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
  // resolve: {
  //   extensions: ['.js'],
  //   fallback: {
  //     fs: false,
  //     child_process: false,
  //     worker_threads: false,
  //   },
  // },
};

module.exports = nextConfig;
