var imports          = require('postcss-import');
var mixins           = require('postcss-mixins');
var mediaVariables   = require('postcss-media-variables');
var nested           = require('postcss-nested');
var customProperties = require("postcss-custom-properties");
var color            = require('postcss-color-function');
var wcag            = require('postcss-wcag-contrast');
var autoprefixer     = require('autoprefixer');
var cssnano          = require('cssnano');
var reporter          = require('postcss-reporter');

module.exports = {
  map: true,

  plugins: [
    imports(),
    mixins(),
    nested(),
    customProperties(),
    color(),
    wcag(),
    autoprefixer(),
    cssnano(),
    reporter(),
  ]
}
