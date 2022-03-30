import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Type } from 'class-transformer';
import { Price } from './price';
import { PaymentIntent } from './enums/paymentIntent';
import { Operation } from '../enums/operation';
import { Currency } from '../currency';
import { Language } from '../language';
import { Urls } from '../generics/urls';
import { PayeeInfo } from '../generics/payeeInfo';
import { MetaData } from '../generics/MetaData-resource';

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