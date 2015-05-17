
/**
 * Wrapper for require to enable simultaneous node/component use.
 */

require = require('require-component')(require);

/**
 * Module dependencies.
 */

var Emitter = require('emitter');

/**
 * Expose the event bus.
 */

module.exports = new Emitter;
