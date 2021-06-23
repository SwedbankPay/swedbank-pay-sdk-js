export interface PaymentOrderReversalTransaction {
    amount: Amount;
    description: string;
    orderItems: OrderItem[];
    payeeReference: string;
    vatAmount: Amount;
}