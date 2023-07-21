'use strict';

/**
 * software-development router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::software-development.software-development');
