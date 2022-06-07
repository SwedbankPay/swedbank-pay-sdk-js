import { Amount } from "../../generics/amount";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { MetaData } from "../../generics/MetaData-resource";
import { Operation } from "../../enums/operation";
import { Urls } from "../../generics/urls";
import { PaymentIntent } from "../enums/paymentIntent";
import * as v from 'class-validator';
import { Type } from "class-transformer";
import { PayeeInfo } from "../../generics/payeeInfo";

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