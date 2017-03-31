# Timber
A barebones web app starter / boilerplate built using PostCSS &amp; Webpack2.

**Timber** is a variation of what I personally use as web app starter. It's certaintly a **WIP**, and I've intentionally tried building it with minimal bloat and small in scope.

My objective is for **Timber** to be flexible, easily customized and extended on a per project basis.

## Features
- [x] Uses Webpack 2
- [x] ES2015
- [x] Browser Sync
- [x] PostCSS (minimal plugins - targeting consistency with CSS4)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [cssano](http://cssnano.co/)
    - [postcss-cli](https://github.com/postcss/postcss-cli)
    - [postcss-color-function](https://github.com/postcss/postcss-color-function)
    - [postcss-comment](https://github.com/zoubin/postcss-comment)
    - [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
    - [postcss-import](https://github.com/postcss/postcss-import)
    - [postcss-media-variables](https://github.com/WolfgangKluge/postcss-media-variables)
    - [postcss-nested](https://github.com/postcss/postcss-nested)
    - [postcss-mixins](https://github.com/postcss/postcss-mixins)
- [x] Autoprefixer
- [x] Minification
- [x] Source Mapping


## Get Started

Clone the repository

``` bash
git clone https://github.com/wad3g/timber.git
cd app
```

Install the dependencies with `yarn` or `npm`.

``` bash
yarn install
```
or

``` bash
npm i
```

Start watching files for compilation.

``` bash
npm start
```

## TO DO
- [x] Add color maps using `postcss-color-function`
- [ ] Fix PostCSS Media Variables
- [ ] Add theming capabilities
- [ ] Re-Add imagemin-cli
- [ ] Clean up styles/PostCSS and reduce duplication and redundency
- [ ] Create better generic, base styles
- [ ] Continue to reduce bloat
- [ ] Many others I can't think of right now
