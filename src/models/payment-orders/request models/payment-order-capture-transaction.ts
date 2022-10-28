import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { OrderItem } from '../../../Services/payment-order/models/OrderItem';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/base-model';

export class PaymentOrderCaptureTransaction extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItems: OrderItem[];
    @v.IsString()
    payeeReference: string;
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}