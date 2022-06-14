'use strict';

/**
 * van service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::van.van');
