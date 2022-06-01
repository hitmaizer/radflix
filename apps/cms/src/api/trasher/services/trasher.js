'use strict';

/**
 * trasher service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trasher.trasher');
