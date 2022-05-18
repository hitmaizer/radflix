const _ = require('lodash');
const plaiceholder = require('plaiceholder');

module.exports = {
  generatePlaceholder(strapi) {
    const upload = strapi.plugin('upload');
    strapi.contentType('plugin::upload.file').attributes.blurhash = {
      type: 'text',
    };

    async function uploadFileAndPersist(fileData, { user } = {}) {
      const config = strapi.config.get('plugin.upload');

      const {
        getDimensions,
        generateThumbnail,
        generateResponsiveFormats,
        isSupportedImage,
      } = upload.service('image-manipulation');

      await upload.service('provider').upload(fileData);

      if (await isSupportedImage(fileData)) {
        const thumbnailFile = await generateThumbnail(fileData);

        if (thumbnailFile) {
          await strapi
            .plugin('upload')
            .service('provider')
            .upload(thumbnailFile);

          try {
            await plaiceholder
              .getPlaiceholder(thumbnailFile.url)
              .then(({ base64 }) => {
                fileData.blurhash = base64;
              });
          } catch (e) {
            fileData.placeholder = '';
          }

          delete thumbnailFile.buffer;
          _.set(fileData, 'formats.thumbnail', thumbnailFile);
        }

        const formats = await generateResponsiveFormats(fileData);

        if (Array.isArray(formats) && formats.length > 0) {
          formats.forEach((format) => {
            if (!format) {
              return;
            }
            const { key, file } = format;
            upload.service('provider').upload(file);
            _.set(fileData, ['formats', key], file);
          });
        }

        const { width, height } = await getDimensions(fileData);

        _.assign(fileData, {
          provider: config.provider,
          width,
          height,
        });
      }

      return this.add(fileData, { user });
    }

    upload.services.upload.uploadFileAndPersist = uploadFileAndPersist;
  },
};
