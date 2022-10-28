import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { OrderItem } from '../../Services/payment-order/models/OrderItem';
import { Identifiable } from '../generics/identifiable';

export class OrderItemListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItemList: OrderItem[];
}