export interface PaymentOrderUpdateRequestDetails {
    amount: Amount;
    operation: Operation;
    vatAmount: Amount;
    orderItems: OrderItem[];
}