import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { OrderItem } from '../../Services/payment-order/models/OrderItem';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/base-model';

export class PaymentOrderReversalTransaction extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;

    @v.ValidateNested()
    @v.IsArray()
    @Type(() => OrderItem)
    orderItems?: OrderItem[];

    @v.IsString()
    payeeReference: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}