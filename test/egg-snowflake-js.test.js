'use strict';

const mock = require('egg-mock');

describe('test/egg-twitter-snowflake.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-twitter-snowflake-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, snowflake')
      .expect(200);
  });
});
