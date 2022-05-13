'use strict';

/**
 * all-movie service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-movie.all-movie');
