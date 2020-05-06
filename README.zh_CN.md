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

## 依赖说明

### 依赖的 egg 版本

egg-snowflake-js 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌


## 开启插件

```js
// config/plugin.js
exports.snowflake = {
  enable: true,
  package: 'egg-snowflake-js',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.snowflake = {
  client: {
    workerId: 1,    //1到31的整数，如果为null，则默认使用一个1到31的随机整数
    machineId: 1    //1到31的整数，如果为null，则默认使用hostname生成一个1到31的整数
  }
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 实例

```js
//{app_root}/app/controller/index.js
async index() {
  const app = this.app;
  const flakeId = app.snowflake.next();
  console.log(flakeId)
}
```

## 提问交流

请到 [egg issues](https://github.com/biubiukevin/egg-snowflake-js/issues) 异步交流。

## License

[MIT](LICENSE)
