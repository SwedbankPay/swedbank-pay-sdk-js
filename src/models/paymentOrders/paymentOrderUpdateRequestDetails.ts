import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { Amount } from "../amount";
import { Operation } from "../Operation";

export interface PaymentOrderUpdateRequestDetails {
    amount: Amount;
    operation: Operation;
    vatAmount: Amount;
    orderItems: OrderItem[];
}