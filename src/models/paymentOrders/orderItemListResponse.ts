import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { Identifiable } from "../identifiable";

export interface OrderItemListResponse extends Identifiable {
    orderItemList: OrderItem[];
}