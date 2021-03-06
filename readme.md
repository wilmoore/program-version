# program-version

[![Build Status](http://img.shields.io/travis/wilmoore/program-version.svg)](https://travis-ci.org/wilmoore/program-version) [![NPM version](http://img.shields.io/npm/v/program-version.svg)](https://www.npmjs.org/package/program-version) [![NPM downloads](http://img.shields.io/npm/dm/program-version.svg)](https://www.npmjs.org/package/program-version) [![LICENSE](http://img.shields.io/npm/l/program-version.svg)](license)

> Returns the program/package name and version as a string with optional format customization.

    $ npm install program-version --save

## Usage

###### import and configure.

    // specify directory of `package.json`
    var version = require('program-version')(__dirname)

    // directory of `package.json` is inferred
    var version = require('program-version')()

###### program/package name, leading `v` and version.

    version()
    //=> program vN.N.N

## Format Options

- `%(program)s`: program/package name
- `%(vprefix)s`: v
- `%(version)s`: version (i.e. 0.1.0)

###### program/pacakge name only.

    version('%(program)s');
    //=> program

###### program/package name and version (no leading `v`).

    version('%(program)s %(version)s');
    //=> program N.N.N

###### version only.

    version('%(version)s');
    //=> N.N.N

## License

  [MIT](license)
