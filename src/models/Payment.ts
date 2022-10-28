import { Price } from '../Services/card-payment/models/Payment/price';
import { MerchantConfig } from '../merchant-config';
import { SwedbankBase } from '../swedbank-base';
import { GenericResource } from './generics/generic-resource';
import { Operation } from './generics/Operation-resource';

export interface PaymentResponse {
  payment: PaymentProperties;
  operations: Operation[];
}

export interface PaymentProperties {
  id: string;
  number: number;
  instrument: string;
  created: Date;
  updated: Date;
  state: string;
  amount: number;
  remainingCaptureAmount: number;
  remainingCancellationAmount: number;
  remainingReversalAmount: number;
  description: string;
  payerReference: string;
  initiatingSystemUserAgent: string;
  userAgent: string;
  language: string;

  prices: GenericResource;
  // transactions: GenericResource;
  // authorizations: GenericResource;
  // captures: GenericResource;
  // reversals: GenericResource;
  // cancellations: GenericResource;
  // urls: GenericResource;
  // payeeInfo: GenericResource;
  // settings: GenericResource;
}

export class Payment extends SwedbankBase {
  id: string;
  number: number;
  instrument: string;
  created: Date;
  updated: Date;
  state: string;
  amount: number;
  remainingCaptureAmount: number;
  remainingCancellationAmount: number;
  remainingReversalAmount: number;
  description: string;
  payerReference: string;
  initiatingSystemUserAgent: string;
  userAgent: string;
  language: string;

  private prices: GenericResource;
  // private transactions: GenericResource;
  // private authorizations: GenericResource;
  // private captures: GenericResource;
  // private reversals: GenericResource;
  // private cancellations: GenericResource;
  // private urls: GenericResource;
  // private payeeInfo: GenericResource;
  // private settings: GenericResource;

  private _operations: Operation[];

  constructor(
    config: MerchantConfig,
    response: {
      payment: PaymentProperties;
      operations: Operation[];
    },
  ) {
    super(config);
    this.id = response.payment.id;
    this.number = response.payment.number;
    this.instrument = response.payment.instrument;
    this.created = response.payment.created;
    this.updated = response.payment.updated;
    this.state = response.payment.state;
    this.amount = response.payment.amount;
    this.remainingCaptureAmount = response.payment.remainingCaptureAmount;
    this.remainingCancellationAmount = response.payment.remainingCancellationAmount;
    this.remainingReversalAmount = response.payment.remainingReversalAmount;
    this.description = response.payment.description;
    this.payerReference = response.payment.payerReference;
    this.initiatingSystemUserAgent = response.payment.initiatingSystemUserAgent;
    this.userAgent = response.payment.userAgent;
    this.language = response.payment.language;

    this.prices = response.payment.prices;
    // this.transactions = response.payment.transactions;
    // this.authorizations = response.payment.authorizations;
    // this.captures = response.payment.captures;
    // this.reversals = response.payment.reversals;
    // this.cancellations = response.payment.cancellations;
    // this.urls = response.payment.urls;
    // this.payeeInfo = response.payment.payeeInfo;
    // this.settings = response.payment.settings;

    this._operations = response.operations;
  }

  // async abort(): Promise<object> {
  //   const operation = this._operations.find(
  //     operation => operation.rel === 'update-payment-abort',
  //   );
  //   return this.runOperation(operation.href, undefined, operation.method);
  // }

  async getPrices(): Promise<Price[]> {
    return this.GenericResource(this.prices && this.prices.id);
  }

  getOperations(): Operation[] {
    return this._operations;
  }

}
