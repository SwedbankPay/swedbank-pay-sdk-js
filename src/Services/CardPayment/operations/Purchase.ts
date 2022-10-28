import { Payment } from '../../../models/payment';
import { PaymentRequestResource } from '../models/payment-request';

export type PurchaseInput = Omit<PaymentRequestResource, 'operation'>;

export class Purchase extends Payment {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
