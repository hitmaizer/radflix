'use strict';

/**
 * surf-movie service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::surf-movie.surf-movie');
