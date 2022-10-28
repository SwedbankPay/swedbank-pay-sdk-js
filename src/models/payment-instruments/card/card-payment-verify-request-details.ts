import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Currency } from '../../currency';
import { Operation } from '../../enums/operation';
import { MetaData } from '../../generics/MetaData-resource';
import { Amount } from '../../generics/amount';
import { PayeeInfo } from '../../generics/payee-info';
import { Urls } from '../../generics/urls';
import { Language } from '../../language';
import { PaymentIntent } from '../enums/payment-intent';

export class CardPaymentVerifyRequestDetails {
    @v.IsEnum(Operation)
    operation: Operation;
    
    @v.IsEnum(PaymentIntent)
    intent: PaymentIntent;

    @v.IsString()
    recurrenceToken: string;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;

    @v.IsString()
    description: string;

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
    metadata: MetaData;
}