import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';
import { PaymentOrderResponse } from './models/PaymentOrderResponse';
import { PaymentOrderProperties } from "./models/PaymentOrderProperties";
import { PaymentOrderRequest } from './models/PaymentOrderRequest';
import { Operation } from '../../models/Operation';

export class PaymentOrder extends SwedbankBase {
  paymentOrder: PaymentOrderProperties;

  private _operations: Operation[];

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

  getOperations(): Operation[] {
    return this._operations;
  }
}
