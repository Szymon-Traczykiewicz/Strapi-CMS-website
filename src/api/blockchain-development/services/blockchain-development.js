'use strict';

/**
 * blockchain-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blockchain-development.blockchain-development');
