const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'https://lh3.googleusercontent.com/',
      'res.cloudinary.com',
      'i.ytimg.com',
      'www.jenkemmag.com',
      '64.media.tumblr.com',
      '1.bp.blogspot.com',
      'smltalkdotcom.files.wordpress.com',
      'bingeddata.s3.amazonaws.com',
      'www.snowboarder.com',
      'img.redbull.com',
      'snowboardmag.com',
      'www.surfline.com',
      '149398836.v2.pressablecdn.com',
      'videsurf.com',
      'rideukbmx.com',
      'bmxunion.com',
      '4.bp.blogspot.com',
      'bmxunion.com',
      's3-eu-west-1.amazonaws.com',
      'm.media-amazon.com',
      'motocrossactionmag.com',
      'derestricted.com',
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com',
      'd28hgpri8am2if.cloudfront.net',
      'wikiimg.tojsiabtv.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
