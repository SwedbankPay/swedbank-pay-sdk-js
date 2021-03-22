import { Payment } from '../../CardPayment/models/Payment';
import { PaymentOrderRequestResource } from '../models/PaymentOrderRequest';

export type PurchaseInput = Omit<PaymentOrderRequestResource, 'operation'>;

export class Purchase extends Payment {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
