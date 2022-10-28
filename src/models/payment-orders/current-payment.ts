import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Currency } from '../currency';
import { Operation } from '../enums/operation';
import { PaymentInstrument } from '../enums/payment-instrument';
import { State } from '../enums/state';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/base-model';
import { Urls } from '../generics/urls';
import { Language } from '../language';
import { CardPaymentAuthorizationResponse } from '../payment-instruments/card/card-payment-authorization-response';
import { PaymentIntent } from '../payment-instruments/enums/payment-intent';
import { PriceListResponse } from '../payment-instruments/price-list-response';
import { CancellationListResponse } from '../payment-instruments/transactions/cancellation-list-response';
import { CaptureListResponse } from '../payment-instruments/transactions/capture-list-response';
import { ReversalListResponse } from '../payment-instruments/transactions/reversal-list-response';
import { TransactionListResponse } from '../payment-instruments/transactions/transaction-list-response';
import { PaymentOrderPayeeInfo } from './payment-order-payee-info';
import { PaymentAuthorizationResponse } from './response models/payment-authorization-response';
import { SaleListResponse } from './sale-list-response';

export class CurrentPayment extends BaseModel {
  @v.ValidateNested()
  @Type(() => Amount)
  amount: Amount;

  @v.ValidateNested()
  @Type(() => CardPaymentAuthorizationResponse)
  authorizations: PaymentAuthorizationResponse;

  @v.ValidateNested()
  @Type(() => CancellationListResponse)
  cancellations: CancellationListResponse;

  @v.ValidateNested()
  @Type(() => CaptureListResponse)
  captures: CaptureListResponse;

  @v.IsString()
  created: string;

  @v.ValidateNested()
  @Type(() => Currency)
  currency: Currency;

  @v.IsString()
  description: string;

  @v.IsEnum(PaymentInstrument)
  instrument: PaymentInstrument;

  @v.IsEnum(PaymentIntent)
  intent: PaymentIntent;

  @v.ValidateNested()
  @Type(() => Language)
  language: Language;

  @v.IsNumber()
  number: number;

  @v.IsEnum(Operation)
  operation: Operation;

  @v.ValidateNested()
  @Type(() => PaymentOrderPayeeInfo)
  payeeInfo: PaymentOrderPayeeInfo;

  @v.IsString()
  payerReference: string;

  @v.IsString()
  paymentToken: string;

  @v.ValidateNested()
  @Type(() => PriceListResponse)
  prices: PriceListResponse;

  @v.ValidateNested()
  @Type(() => ReversalListResponse)
  reversals: ReversalListResponse;

  @v.ValidateNested()
  @Type(() => SaleListResponse)
  sales: SaleListResponse;

  @v.IsEnum(State)
  state: State;

  @v.ValidateNested()
  @Type(() => TransactionListResponse)
  transactions: TransactionListResponse;

  @v.IsString()
  updated: string;

  @v.ValidateNested()
  @Type(() => Urls)
  urls: Urls;

  @v.IsString()
  userAgent: string;
}
