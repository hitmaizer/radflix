'use strict';

/**
 * all-doc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-doc.all-doc');
