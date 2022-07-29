'use strict';

/**
 * olympic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::olympic.olympic');
