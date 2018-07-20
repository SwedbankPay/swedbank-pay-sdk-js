import 'mocha';
import {expect} from 'chai';

import {CardPayments} from '../src';

const initializator = {
  merchantToken: 'xxxx-xxxx-xxxx',  // Merchant Token from admin.payex.com
  sessionId: 'xxx-xxx-xxx',  // Session ID. If not given, Payex will generate.
  consumerIp: 'xxx.xxx.xxx.xxx',  // The endusers IP address
  testMode: false                 // If true, testing URLs are used.
};

describe('Payex CardPayments API', () => {
  it('should exist', done => {
    expect(typeof CardPayments).not.to.equal(null);
    done();
  });
  it('should be a class', done => {
    expect(typeof CardPayments).to.eq('function');
    done();
  });
  it('should construct', done => {
    const payex = new CardPayments(initializator);
    expect(typeof payex).to.eq('object');
    done();
  });
  describe('new payment', () => {
    it('should exists', done => {
      const payex = new CardPayments(initializator);
      expect(payex).to.have('initialize');
      done();
    });
    it('should initialize', done => {
      done();
    })
  });
});
