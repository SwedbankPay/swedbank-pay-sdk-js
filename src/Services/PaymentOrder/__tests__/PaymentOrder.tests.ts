import * as nock from 'nock';
import { PaymentOrder } from "../PaymentOrder";
import { PaymentOrderResponse } from "../models/PaymentOrderResponse";
import PaymentOrderResponseExample from "../__fixtures__/PaymentOrderResponse";

describe('PaymentOrder', () => {
  const merchantConfig = {
    merchantToken: 'test',
    consumerIp: '1.2.3.4'
  };
  let paymentorder: PaymentOrder;

  beforeAll(() => {
    paymentorder = new PaymentOrder(merchantConfig);
  });


  it('should properly map properties', async () => {
    nock('https://api.payex.com/psp')
      .persist()
      .post('/test')
      .reply(200, PaymentOrderResponseExample);
    let response = await paymentorder.get("/test");
    expect(response.paymentOrder).toBeTruthy()
  })
})