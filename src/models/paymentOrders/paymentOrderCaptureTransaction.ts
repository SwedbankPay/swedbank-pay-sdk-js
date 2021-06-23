export interface PaymentOrderCaptureTransaction {
    amount: Amount;
    description: string;
    orderItems: OrderItem[];
    payeeReference: string;
    vatAmount: Amount;
}