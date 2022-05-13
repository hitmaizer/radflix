'use strict';

/**
 *  surf-movie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::surf-movie.surf-movie',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service('api::surf-movie.surf-movie')
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
