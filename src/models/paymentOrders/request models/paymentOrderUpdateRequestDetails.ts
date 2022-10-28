import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { OrderItem } from '../../../Services/PaymentOrder/models/OrderItem';
import { Operation } from '../../enums/operation';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/baseModel';

export class PaymentOrderUpdateRequestDetails extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsEnum(Operation)
    operation: Operation;
    
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
    
    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItems: OrderItem[];
}