var imports          = require('postcss-import');
var mixins           = require('postcss-mixins');
var mediaVariables   = require('postcss-media-variables');
var nested           = require('postcss-nested');
var customProperties = require("postcss-custom-properties");
var color            = require('postcss-color-function');
var autoprefixer     = require('autoprefixer');
var cssnano          = require('cssnano')

module.exports = {
  map: true,

  plugins: [
    imports(),
    mixins(),
    nested(),
    customProperties(),
    color(),
    autoprefixer(),
    cssnano(),
  ]
}
