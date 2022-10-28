import nock = require('nock');
import { payment_request } from '../__fixtures__/payment-request';
import { payment_response } from '../__fixtures__/payment-response';
import { CardPayment } from '../card-payment';
import { Purchase } from '../operations/purchase';

nock('https://api.payex.com/psp')
  .persist()
  .post('/creditcard/payments')
  .reply(200, payment_response);

const testScope = nock('https://api.payex.com')
  .get('/test-resource')
  .reply(200, payment_response);

describe('CardPayment', () => {
  let card: CardPayment;
  beforeEach(() => {
    card = new CardPayment({
      merchantToken: '',
      consumerIp: '1.2.3.4',
    });
  });
  it('should construct', () => {
    expect(card).toBeTruthy();
  });
  it('should be able to create payment object', async () => {
    const response = await card.createPurchase(payment_request.payment);
    expect(response).toBeTruthy();
    expect(response).toBeInstanceOf(Purchase);
    expect(response.id).toBe(payment_response.payment.id);
  });
  it('should return redirect authorization', async () => {
    const response = await card.createPurchase(payment_request.payment);
    const redirectUrl = response.getRedirectAuthorization();
    const shouldBeRedirectUrl = payment_response.operations.find(
      op => op.rel === 'redirect-authorization',
    ).href;
    expect(redirectUrl).toBe(shouldBeRedirectUrl);
  });
  it('should get payment resource', async () => {
    await card.get('test-resource');
    expect(testScope).toBeTruthy();
  });
});
