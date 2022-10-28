import * as nock from 'nock';
import { CardPayment } from '../card-payment';
import PaymentRequest from '../__fixtures__/PaymentRequest';
import PaymentResponse from '../__fixtures__/PaymentResponse';
import { Purchase } from '../operations/purchase';

nock('https://api.payex.com/psp')
  .persist()
  .post('/creditcard/payments')
  .reply(200, PaymentResponse);

const testScope = nock('https://api.payex.com')
  .get('/test-resource')
  .reply(200, PaymentResponse);


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
    const response = await card.createPurchase(PaymentRequest.payment);
    expect(response).toBeTruthy();
    expect(response).toBeInstanceOf(Purchase);
    expect(response.id).toBe(PaymentResponse.payment.id);
  });
  it('should return redirect authorization', async () => {
    const response = await card.createPurchase(PaymentRequest.payment);
    const redirectUrl = response.getRedirectAuthorization();
    const shouldBeRedirectUrl = PaymentResponse.operations.find(
      op => op.rel === 'redirect-authorization',
    ).href;
    expect(redirectUrl).toBe(shouldBeRedirectUrl);
  });
  it('should get payment resource', async () => {
    await card.get('test-resource');
    expect(testScope).toBeTruthy();
  });
});
