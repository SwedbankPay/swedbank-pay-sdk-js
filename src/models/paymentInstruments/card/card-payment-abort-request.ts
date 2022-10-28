import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CardPaymentAbortPayment } from './card-payment-abort-payment';

export class CardPaymentAbortRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CardPaymentAbortPayment)
    payment: CardPaymentAbortPayment;
}