import { Payment } from '../../../models/payment';
import { PaymentRequestResource } from '../models/PaymentRequest';

export type PurchaseInput = Omit<PaymentRequestResource, 'operation'>;

export class Purchase extends Payment {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
