import { PaymentOrderRequestResource } from '../models/PaymentOrderRequest';
import { PaymentOrder } from '../PaymentOrder';

export type PurchaseInput = Omit<PaymentOrderRequestResource, 'operation'>;

export class Purchase extends PaymentOrder {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
