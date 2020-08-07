'use strict';

const flakeId = require('flake-idgen');
const intformat = require('biguint-format');
const bigNumber = require('bignumber');
const moment = require('moment');
const os = require('os');

function getWorker(hostName) {
  if (!hostName) {
    return 1;
  }

  const num = Number(hostName.substr(hostName.length - 2));
  if (isNaN(num)) {
    return 1;
  }

  console.info('snowflake worker is: ', num);
  return num;
}

class SnowFlake {
  constructor(app, {
    machineId,
    workerId,
  }) {
    this.app = app;
    this.logger = app.coreLogger;
    this.machineId = machineId || getWorker(os.hostname());
    this.workerId = workerId || parseInt(Math.random() * (31 - 1 + 1) + 1, 10);

    if (this.machineId <= 0 || this.machineId > 31) {
      this.logger.error('machineId should be between 1 and 31');
      throw new Error('machineId should be between 1 and 31');
    }
    if (this.workerId <= 0 || this.workerId > 31) {
      this.logger.error('workerId should be between 1 and 31');
      throw new Error('workerId should be between 1 and 31');
    }

    this.flakeIdGen = new flakeId({
      datacenter: this.machineId,
      worker: this.workerId,
    });
  }

  next() {
    return intformat(this.flakeIdGen.next(), 'dec');
  }

  create() {
    /* global BigInt */
    return BigInt(intformat(this.flakeIdGen.next(), 'dec'));
  }

  diff(v) {
    const time = new bigNumber(v);
    const now = moment();
    return now.valueOf() - parseInt(time.dividedBy(Math.pow(2, 22)).toNumber());
  }
}
function create(config = {}, app) {
  return new SnowFlake(app, config);
}
module.exports = app => {
  app.addSingleton('snowflake', create);
};
