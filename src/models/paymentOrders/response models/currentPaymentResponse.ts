import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CurrentPayment } from '../currentPayment';

export class CurrentPaymentResponse extends BaseModel{
    @v.ValidateNested()
    @Type(() => URL)
    paymentOrder: URL;

    @v.IsString()
    menuElementName: string;

    @v.ValidateNested()
    @Type(() => CurrentPayment)
    payment: CurrentPayment;
}