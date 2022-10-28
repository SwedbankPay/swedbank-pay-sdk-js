import { OrderItem } from '../../../Services/PaymentOrder/models/OrderItem';
import { Amount } from '../../generics/amount';
import { Operation } from '../../enums/operation';
import { BaseModel } from '../../generics/baseModel';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

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