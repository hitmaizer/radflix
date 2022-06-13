const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['https://lh3.googleusercontent.com/', 'res.cloudinary.com'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
