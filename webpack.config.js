const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',

  devtool: 'source-map',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test:   /\.post\.css/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // minimize: true,
                sourceMap: true,
              }
            },

            'postcss-loader',
          ]
        })
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
            }
          }
        ]
      },
    ]
  },

  plugins: [

    // copy static files to ./dist + needs work
    new CopyWebpackPlugin([
        {
            context: 'src',
            from: './images',
            to: './images'
        },
        {
            from: './static'
        }
    ]),

    // save bundle css as an external file
    new ExtractTextPlugin('./css/app.css'),

    new StyleLintPlugin({
       configFile: 'stylelint.config.js',
       context: 'src',
       files: '**/*.css',
       failOnError: false,
       quiet: false,
    }),

    // run the browsersync server
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 4000,
        proxy: 'http://localhost:8080/',
        // prevent BrowserSync from reloading the page in favor of webpack-dev-server
        reload: false
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/index.html',
      filename: './docs/index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/typography.html',
      filename: './docs/typography.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/colors.html',
      filename: './docs/colors.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/utilities.html',
      filename: './docs/utilities.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/buttons.html',
      filename: './docs/buttons.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/cards.html',
      filename: './docs/cards.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/tables.html',
      filename: './docs/tables.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/nav.html',
      filename: './docs/nav.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/docs/tooltips.html',
      filename: './docs/tooltips.html',
    }),
  ],
}
