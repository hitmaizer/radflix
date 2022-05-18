const extendFileUpload = require('./extensions/extendFileUpload');

module.exports = {
  register({ strapi }) {
    extendFileUpload.generatePlaceholder(strapi);
  },

  bootstrap(/* { strapi } */) {},
};
