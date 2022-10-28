import { OrderItem } from '../../Services/PaymentOrder/models/OrderItem';
import { Identifiable } from '../generics/identifiable';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItemList: OrderItem[];
}