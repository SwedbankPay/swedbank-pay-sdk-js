import { BaseModel } from "../generics/baseModel";
import { CreditCardOptions } from "../creditCardOptions";
import { Invoice } from "./invoice";
import { Swish } from "./swish";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class PaymentOrderPaymentOptionsItems extends BaseModel{
    @v.ValidateNested()
    @Type(() => CreditCardOptions)
    creditCard: CreditCardOptions;

    @v.ValidateNested()
    @Type(() => Invoice)
    invoice: Invoice;

    @v.ValidateNested()
    @Type(() => Swish)
    swish: Swish;
}