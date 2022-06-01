/**
 *  bmx-doc controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bmx-doc.bmx-doc', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };
    const entity = await strapi.service('api::bmx-doc.bmx-doc').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
}));
