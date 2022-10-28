import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Currency } from '../currency';
import { Operation } from '../enums/operation';
import { BaseModel } from '../generics/base-model';
import { MetaData } from '../generics/meta-data-resource';
import { PayeeInfo } from '../generics/payee-info';
import { Urls } from '../generics/urls';
import { Language } from '../language';
import { PaymentIntent } from './enums/payment-intent';
import { Price } from './price';

export class GenericPaymentRequestDetails extends BaseModel {
  @v.IsEnum(Operation)
  operation: Operation;

  @v.IsEnum(PaymentIntent)
  intent: PaymentIntent;

  @v.IsCurrency()
  currency: Currency;

  @v.IsString()
  description: string;

  @v.ValidateNested()
  @v.IsArray()
  @Type(() => Price)
  prices: Price[];

  @v.IsString()
  userAgent: string;

  @v.ValidateNested()
  @Type(() => Language)
  language: Language;

  @v.ValidateNested()
  @Type(() => Urls)
  urls: Urls;

  @v.ValidateNested()
  @Type(() => PayeeInfo)
  payeeInfo: PayeeInfo;

  @v.ValidateNested()
  @Type(() => MetaData)
  metaData: MetaData;
}
