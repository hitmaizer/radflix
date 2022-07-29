'use strict';

/**
 * tampa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tampa.tampa');
