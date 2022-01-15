import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { Amount } from "../amount";
import { Operation } from "../operation";

export interface PaymentOrderUpdateRequestDetails {
    amount: Amount;
    operation: Operation;
    vatAmount: Amount;
    orderItems: OrderItem[];
}