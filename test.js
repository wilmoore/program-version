'use strict'

/**
 * imports.
 */

var json = require('./package.json')
var test = require('tape')
var version = require('./')

/**
 * test cases.
 */

var cases = [
  { name: '#{program} v#{version} (default format)', input: '', expected: json.name + ' v' + json.version },
  { name: '#{program} v#{version} (provided format)', input: '%(program)s %(vprefix)s%(version)s', expected: json.name + ' v' + json.version },
  { name: '#{program}', input: '%(program)s', expected: json.name },
  { name: '#{program} #{version}', input: '%(program)s %(version)s', expected: json.name + ' ' + json.version },
  { name: 'v#{version}', input: '%(version)s', expected: json.version }
]

/**
 * parameterized test suite.
 */

cases.forEach(function (testcase) {
  test(testcase.name, function (t) {
    t.equal(testcase.expected, version()(testcase.input))
    t.end()
  })
})
