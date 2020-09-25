import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';
import { PaymentOrderResponse } from './models/PaymentOrderResponse';
import { PaymentOrderRequest } from './models/PaymentOrderRequest';

export class PaymentOrder extends SwedbankBase {
  paymentOrder: PaymentOrder;

  constructor(config: MerchantConfig) {
    super(config);
  }

  async create(item: PaymentOrderRequest): Promise<PaymentOrderResponse> {
    const payment = await this.request<PaymentOrderResponse>(
      'psp/paymentorders',
      item,
      'POST'
    );
    return payment.body;
  }

  async get(id: string): Promise<PaymentOrderResponse> {
    const payment = await this.request<PaymentOrderResponse>(id);
    return payment.body;
  }

}
