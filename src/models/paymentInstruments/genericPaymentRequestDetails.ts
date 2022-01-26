import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Type } from 'class-transformer';
import { Price } from './price';
import { PaymentIntent } from './paymentIntent';
import { Operation } from '../enums/operation';

export class GenericPaymentRequestDetails extends BaseModel {
    @v.IsString()
    description: string;

    @v.ValidateNested()
    @v.IsArray()
    @Type(() => Price)
    prices: Price[];

    @v.IsEnum(PaymentIntent)
    intent: PaymentIntent;

    @v.IsEnum(Operation)
    operation: Operation;
}