# egg-snowflake-js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-snowflake-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-snowflake-js
[travis-image]: https://img.shields.io/travis/eggjs/egg-snowflake-j's.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-snowflake-js
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-snowflake-js.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-snowflake-js?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-snowflake-js.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-snowflake-js
[snyk-image]: https://snyk.io/test/npm/egg-snowflake-js/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-snowflake-js
[download-image]: https://img.shields.io/npm/dm/egg-snowflake-js.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-snowflake-js


<!--
Description here.
-->

## Install

```bash
$ npm i egg-snowflake-js --save
```
## Dependencies egg version

egg-snowflake-js version | egg 1.x
--- | ---
1.x | 😁

## Usage

```js
// {app_root}/config/plugin.js
exports.snowflake = {
  enable: true,
  package: 'egg-snowflake-js',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.snowflake = {
  client: {
    workerId: 1,    //1 to 31 int number. If do not set workerId, it will set a random number from 1 to 31
    machineId: 1    //1 to 31 int number. If do not set machineId, it will set a int number(1 to 31) from hostname lenth
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
//{app_root}/app/controller/index.js
async index() {
  const app = this.app;
  const flakeId = app.snowflake.next();
  console.log(flakeId)
}
```
## Questions & Suggestions

Please open an issue [here](https://github.com/biubiukevin/egg-snowflake-js/issues).

## License

[MIT](LICENSE)
