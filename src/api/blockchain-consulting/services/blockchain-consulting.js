'use strict';

/**
 * blockchain-consulting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blockchain-consulting.blockchain-consulting');
