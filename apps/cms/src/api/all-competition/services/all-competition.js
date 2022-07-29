'use strict';

/**
 * all-competition service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-competition.all-competition');
