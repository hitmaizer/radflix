const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['https://lh3.googleusercontent.com/', 'res.cloudinary.com'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
