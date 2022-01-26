import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { Amount } from "../generics/amount";
import { Operation } from "../enums/operation";

export interface PaymentOrderUpdateRequestDetails {
    amount: Amount;
    operation: Operation;
    vatAmount: Amount;
    orderItems: OrderItem[];
}