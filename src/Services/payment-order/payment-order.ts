import { MerchantConfig } from '../../merchant-config';
import { Operation } from '../../models/generics/Operation-resource';
import { SwedbankBase } from '../../swedbank-base';
import { PaymentOrderProperties } from './models/payment-order-properties';
import { PaymentOrderRequest } from './models/payment-order-request';
import { PaymentOrderResponse } from './models/payment-order-response';
import { Purchase, PurchaseInput } from './operations/purchase';

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

  async createPurchase(item: PurchaseInput): Promise<Purchase> {
    const request = {
      paymentorder: {
        operation: 'Purchase',
        ...item
      }
    } as PaymentOrderRequest;

    const response = await this.create(
      request
    );

    return new Purchase(this.config, response);
  }


  async get(id: string): Promise<PaymentOrderResponse> {
    const payment = await this.request<PaymentOrderResponse>(id);
    return payment.body;
  }

  getOperations(): Operation[] {
    return this._operations;
  }
}
