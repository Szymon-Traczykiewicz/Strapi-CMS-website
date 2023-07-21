'use strict';

/**
 * software-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::software-development.software-development');
