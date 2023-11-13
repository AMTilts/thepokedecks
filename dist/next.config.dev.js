"use strict";

var nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      pathname: '/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/**'
    }]
  },
  webpack: function webpack(config, _ref) {
    var isServer = _ref.isServer;
    // ... your existing webpack configuration
    return config;
  } // ... any other configuration

};
module.exports = nextConfig;