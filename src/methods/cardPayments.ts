import {Payex} from '../payex';
import Promise = require('bluebird');
import _ = require('lodash');

interface Hypermedia {
  id: string;
}

interface PayexOperation {
  href: string;
  rel: string;
  method: string;
}

interface PayexPaymentResponse {
  payment: PayexPaymentResourceVariables;
  operations: [PayexOperation];
}

interface PayexPaymentResourceVariables {
  id: string;
  number: number;
  created: string;
  updated: string;
  state: string;
  operation: string;
  intent: string;
  currency: string;
  amount: number;
  remainingCaptureAmount: number;
  remainingCancellationAmount: number;
  remainingReversalAmount: number;
  description: string;
  payerReference: string;
  initiatingSystemUserAgent: string;
  userAgent: string;
  language: string;
  prices: Hypermedia;
  payeeInfo: Hypermedia;
  urls: Hypermedia;
  transactions: Hypermedia;
  authorizations: Hypermedia;
  captures: Hypermedia;
  reversals: Hypermedia;
  cancellations: Hypermedia;
}

class PayexPaymentResource {
  id: string;
  number: number;
  created: string;
  updated: string;
  state: string;
  operation: string;
  intent: string;
  currency: string;
  amount: number;
  remainingCaptureAmount: number;
  remainingCancellationAmount: number;
  remainingReversalAmount: number;
  description: string;
  payerReference: string;
  initiatingSystemUserAgent: string;
  userAgent: string;
  language: string;
  prices: Hypermedia;
  payeeInfo: Hypermedia;
  urls: Hypermedia;
  transactions: Hypermedia;
  authorizations: Hypermedia;
  captures: Hypermedia;
  reversals: Hypermedia;
  cancellations: Hypermedia;

  operations: [PayexOperation];

  constructor(values: PayexPaymentResponse) {
    this.id = values.payment.id;
    this.number = values.payment.number;
    this.created = values.payment.created;
    this.updated = values.payment.updated;
    this.state = values.payment.state;
    this.operation = values.payment.operation;
    this.intent = values.payment.intent;
    this.currency = values.payment.currency;
    this.amount = values.payment.amount;
    this.remainingCaptureAmount = values.payment.remainingCaptureAmount;
    this.remainingCancellationAmount =
        values.payment.remainingCancellationAmount;
    this.remainingReversalAmount = values.payment.remainingReversalAmount;
    this.description = values.payment.description;
    this.payerReference = values.payment.payerReference;
    this.initiatingSystemUserAgent = values.payment.initiatingSystemUserAgent;
    this.userAgent = values.payment.userAgent;
    this.language = values.payment.language;
    this.prices = values.payment.prices;
    this.payeeInfo = values.payment.payeeInfo;
    this.urls = values.payment.urls;
    this.transactions = values.payment.transactions;
    this.authorizations = values.payment.authorizations;
    this.captures = values.payment.captures;
    this.reversals = values.payment.reversals;
    this.cancellations = values.payment.cancellations;
    this.operations = values.operations;
  }

  abort() {}

  directAuthorization() {}

  capture() {}

  finalizeAuthorization() {}

  getRedirectUrl(): string|void {
    const operation: PayexOperation|undefined = _.find(
        this.operations,
        operation => operation.rel === 'redirect-authorization');
    if (typeof operation === 'undefined') {
      return operation;
    }

    return operation.href;
  }
}

export class CardPayments extends Payex {
  initialize(): Promise<PayexPaymentResource> {
    return this
        .request<PayexPaymentResponse>('POST', '/psp/creditcard/payments')
        .then((value: PayexPaymentResponse) => {
          return new PayexPaymentResource(value);
        });
  }
}
