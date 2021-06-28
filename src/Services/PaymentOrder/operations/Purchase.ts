import { MerchantConfig } from '../../../MerchantConfig';
import { PaymentOrderRequestResource } from '../models/PaymentOrderRequest';
import { PaymentOrderResponse } from '../models/PaymentOrderResponse';

export type PurchaseInput = Omit<PaymentOrderRequestResource, 'operation'>;

export class Purchase extends PaymentOrderResponse {

  constructor(
    config: MerchantConfig,
    response: PaymentOrderResponse,
  ) {
    const superResponse = {
      payment: response.paymentOrder,
      operations: response.operations
    }
    super(config, superResponse);
  }
  getRedirectAuthorization(): string {
    return this.getOperations().find(
      operation => operation.rel === 'redirect-authorization',
    ).href;
  }
}
