"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = async () => {
    const tracer = require('dd-trace').init({
        hostname: process.env.DD_AGENT_HOST,
        port: 8126
    });
};
