import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';
import { PaymentOrderResponse } from './models/PaymentOrderResponse';
import { Operation } from '../../models/Operation'

export class PaymentOrder extends SwedbankBase {
  private _operations: Operation[];
  paymentOrder: PaymentOrder;

  constructor(config: MerchantConfig, response: PaymentOrderResponse) {
    super(config);
    this._operations = response.operations;
    this.paymentOrder = response.paymentOrder;
  }

  async get(id: string): Promise<PaymentOrder> {
    const paymentOrder = await this.request<PaymentOrderResponse>(id)
    return new PaymentOrder(this.config, paymentOrder.body);
  }

}
