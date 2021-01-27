import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';
import { PaymentOrderProperties, PaymentOrderResponse } from './models/PaymentOrderResponse';
import { PaymentOrderRequest } from './models/PaymentOrderRequest';
import { Operation } from '../../models/Operation';

export class PaymentOrder extends SwedbankBase {
  paymentOrder: PaymentOrderProperties;

  private _operations: Operation[];

  constructor(config: MerchantConfig,
    response: {
      paymentOrder: PaymentOrderProperties,
      operations: Operation[]
    }) {
    super(config);
    this.paymentOrder = response.paymentOrder;
    this._operations = response.operations;
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
