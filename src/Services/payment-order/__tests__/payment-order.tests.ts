import * as nock from 'nock';
import { payment_order_request_example } from '../__fixtures__/payment-order-request-example';
import { payment_order_response_example } from '../__fixtures__/payment-order-response-example';
import { Purchase } from '../operations/purchase';
import { PaymentOrder } from '../payment-order';

nock('https://api.payex.com/psp')
  .persist()
  .post('/paymentorders')
  .reply(200, payment_order_response_example);

describe('PaymentOrder', () => {
  const merchantConfig = {
    merchantToken: 'test',
    consumerIp: '1.2.3.4',
  };
  let paymentorder: PaymentOrder;

  beforeEach(() => {
    paymentorder = new PaymentOrder(merchantConfig);
  });

  it('should construct', () => {
    expect(paymentorder).toBeTruthy();
  });
  it('should properly map paymentorder property', async () => {
    nock('https://api.payex.com')
      .persist()
      .get('/test')
      .reply(200, payment_order_response_example);
    const response = await paymentorder.get('/test');
    expect(response.paymentOrder).toBeTruthy();
  });
  it('should be able to create paymentOrder object', async () => {
    const response = await paymentorder.create(payment_order_request_example);
    expect(response).toBeTruthy();
    expect(response.paymentOrder.id).toBe(
      payment_order_response_example.paymentOrder.id,
    );
  });
  it('should be able to create a purchase', async () => {
    const response = await paymentorder.createPurchase(
      payment_order_request_example.paymentorder,
    );
    expect(response).toBeTruthy();
    expect(response).toBeInstanceOf(Purchase);
  });
});
