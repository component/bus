
/**
 * Module dependencies.
 */

var Emitter;

try {
  Emitter = require('component-emitter');
} catch (err) {
  Emitter = require('emitter');
}

/**
 * Expose the event bus.
 */

module.exports = new Emitter;
