const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  target: 'serverless',
  distDir: 'build',
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  webpack: (config, options) => {

    // modify the `config` here

    return config;
  },
};

module.exports = withPlugins([[withCSS], [withSass]], nextConfig)