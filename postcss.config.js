var imports          = require('postcss-import');
var mediaVariables   = require('postcss-media-variables');
var mixins           = require('postcss-mixins');
var nested           = require('postcss-nested');
var customProperties = require("postcss-custom-properties");
var color            = require('postcss-color-function');
var autoprefixer     = require('autoprefixer');

module.exports = {
  map: true,

  plugins: [
    imports(),
    mixins(),
    nested(),
    customProperties(),
    color(),
    autoprefixer(),
  ]
}
