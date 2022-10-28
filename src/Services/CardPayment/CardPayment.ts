import { MerchantConfig } from '../../MerchantConfig';
import { SwedbankBase } from '../../SwedbankBase';
import { Payment, PaymentResponse } from '../../models/payment';
import { PaymentRequest } from './models/PaymentRequest';
import { Purchase, PurchaseInput } from './operations/Purchase';

export class CardPayment extends SwedbankBase {
  /**
   * @example
   * ```typescript
   * const payments = new CardPayment({
   *  merchantToken: '88837cjijsgjhguwg8xxmx9ax8ax8x',
   *  consumerIp,
   *  sessionId,
   * });
   *
   * payment.create({
   *  intent: 'Authorization',
   *  ...
   * })
   * ```
   */
  constructor(config: MerchantConfig) {
    super(config);
  }

  private async create(item: PaymentRequest): Promise<PaymentResponse> {
    const payment = await this.request<PaymentResponse>(
      'psp/creditcard/payments',
      item,
      'POST',
    );

    return payment.body;
  }

  async get(id: string): Promise<Payment> {
    const payment = await this.request<PaymentResponse>(id);

    return new Payment(this.config, payment.body);
  }

  async createPurchase(item: PurchaseInput): Promise<Purchase> {
    const response = await this.create({
      payment: {
        operation: 'Purchase',
        ...item,
      },
    });

    return new Purchase(this.config, response);
  }

  // async createRecur() {}

  // async createPayout() {}

  // async createVerify() {}

  // async createUnsheduledPurchase() {}
}
