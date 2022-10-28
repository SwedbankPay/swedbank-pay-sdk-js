import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { CreditCardOptions } from '../creditCardOptions';
import { BaseModel } from '../generics/baseModel';
import { Invoice } from './invoice';
import { Swish } from './swish';

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