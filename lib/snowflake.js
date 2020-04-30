'use strict';

const flakeId = require('flake-idgen');
const intformat = require('biguint-format');
const bigNumber = require('bignumber');
const moment = require('moment');
const fp = require('lodash/fp');
// const os = require('os');


class SnowFlake {
  constructor(app, {
    machineId = this.getWorker(),
    workerId = process.pid,
  }) {
    this.app = app;
    this.logger = app.logger;
    if (machineId <= 0 || machineId > 31) {
      app.coreLogger.error('machineId should be between 1 and 31');
      throw new Error('machineId should be between 1 and 31');
    }
    if (workerId <= 0 || workerId > 31) {
      app.coreLogger.error('workerId should be between 1 and 31');
      throw new Error('workerId should be between 1 and 31');
    }
    this.flakeIdGen = new flakeId({
      datacenter: machineId,
      worker: workerId,
    });
  }
  getWorker() {
    const hostName = fp.getOr(null)('hostName')(this.app.config);
    if (!hostName) {
      return 1;
    }

    const num = Number(hostName.substr(hostName.length - 2));
    if (isNaN(num)) {
      return 1;
    }

    this.logger.info('snowflake worker is: ', num);
    return num;
  }
  next() {
    return intformat(this.flakeIdGen.next(), 'dec');
  }

  create() {
    return BigInt(intformat(this.flakeIdGen.next(), 'dec'));
  }

  diff(v) {
    const time = new bigNumber(v);
    const now = moment();
    return now.valueOf() - parseInt(time.dividedBy(Math.pow(2, 22)).toNumber());
  }
}

module.exports = app => {
  app.addSingleton('snowflake', (config, app) => {
    return new SnowFlake(app, config);
  });
};
