import { PaymentOrderRequestResource, PaymentOrderRequest } from '../models/PaymentOrderRequest';

export type PurchaseInput = Omit<PaymentOrderRequestResource, 'operation'>;

export class Purchase extends PaymentOrderRequest {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
