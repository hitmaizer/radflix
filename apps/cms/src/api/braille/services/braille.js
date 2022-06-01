'use strict';

/**
 * braille service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::braille.braille');
