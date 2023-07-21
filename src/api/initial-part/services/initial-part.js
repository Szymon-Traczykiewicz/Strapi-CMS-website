'use strict';

/**
 * initial-part service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::initial-part.initial-part');
