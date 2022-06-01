/**
 *  trasher controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trasher.trasher', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };
    const entity = await strapi.service('api::trasher.trasher').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
}));
