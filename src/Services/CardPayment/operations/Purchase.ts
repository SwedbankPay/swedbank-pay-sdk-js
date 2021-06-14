import { PaymentRequestResource } from '../models/PaymentRequest';
import { Payment } from '../../../models/Payment';

export type PurchaseInput = Omit<PaymentRequestResource, 'operation'>;

export class Purchase extends Payment {
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
