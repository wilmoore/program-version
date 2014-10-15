'use strict'

/**
 * imports.
 */

var dirname = require('path').dirname;
var join = require('path').join;
var sprintf = require('sprintf').sprintf;

/**
 * exports.
 */

module.exports = version;

/**
 * returns the package/program name and version as a string.
 *
 * @param {String} format
 * `sprintf` compatible format string where:
 *
 * - %(program)s => program/package name
 * - %(vprefix)s => v
 * - %(version)s => version (i.e. 0.1.0)
 */

function version(format) {
  var file = join(dirname(require.main.filename), 'package.json');
  var json = require(file);
  var args = {
    program: json.name,
    vprefix: 'v',
    version: json.version
  };

  return sprintf(format || '%(program)s %(vprefix)s%(version)s', args);
}
