import * as nock from 'nock';
import { PaymentOrder } from "../PaymentOrder";
import PaymentOrderRequestExample from '../__fixtures__/PaymentOrderRequestExample';
import PaymentOrderResponseExample from "../__fixtures__/PaymentOrderResponseExample";
import { Purchase } from '../operations/Purchase';

nock('https://api.payex.com/psp')
  .persist()
  .post('/paymentorders')
  .reply(200, PaymentOrderResponseExample);

describe('PaymentOrder', () => {
  const merchantConfig = {
    merchantToken: 'test',
    consumerIp: '1.2.3.4'
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
      .reply(200, PaymentOrderResponseExample);
    const response = await paymentorder.get("/test");
    expect(response.paymentOrder).toBeTruthy()
  });
  it('should be able to create paymentOrder object', async () =>{
    const response = await paymentorder.create(PaymentOrderRequestExample);
    expect(response).toBeTruthy();
    expect(response.paymentOrder.id).toBe(PaymentOrderResponseExample.paymentOrder.id);
  });
  it('should be able to create a purchase', async () => {
    const response = await paymentorder.createPurchase(PaymentOrderRequestExample.paymentorder);
    expect(response).toBeTruthy();
    expect(response).toBeInstanceOf(Purchase);
  });
})
