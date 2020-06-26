import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';
import { PaymentOrderResponse } from './models/PaymentOrderResponse';

export class PaymentOrder extends SwedbankBase {
  constructor(config: MerchantConfig, response: {
    paymentOrder: PaymentOrderResponse
  }) {
    super(config);
  }

  async get(id: string): Promise<PaymentOrder> {
    const paymentOrder = await this.request<PaymentOrderResponse>(id)
    return new PaymentOrder(this.config, paymentOrder.body);
  }

}
