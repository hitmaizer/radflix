'use strict';

/**
 * transworld service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transworld.transworld');
