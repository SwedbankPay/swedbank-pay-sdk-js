import { CardPayment } from '../src/main';

const payment = new CardPayment({
  merchantToken: 'JpeB^pcOFA&#uUwXVXYNZ7K#amJl@!f75286Q0R!sciiJB5!5rQM',
  consumerIp: '1.2.3.4',
  sessionId: 'n7zMx0AT*2RoJ8n#hRkLCNYeC%Y8o74fUn84B7zcW3P%1mBP@m0Q',
});

const runTransaction = async (): Promise<void> => {
  const purchase = await payment.createPurchase({
    intent: 'Authorization',
    currency: 'NOK',
    prices: [
      {
        type: 'CreditCard',
        amount: 1500,
        vatAmount: 0,
      },
    ],
    description: 'A test transaction',
    userAgent: 'Mozilla/5.0',
    language: 'en-US',
    urls: {
      completeUrl: 'https://example.com/payment-completed',
      cancelUrl: 'https://example.com/payment-canceled',
      callbackUrl: 'https://example.com/payment-callback',
      logoUrl: 'https://example.com/payment-logo.png',
      termsOfServiceUrl: 'https://example.com/payment-terms.pdf',
    },
    payeeInfo: {
      payeeId: 'abc1324-ffa4-abc1324-abc1324-abc1324',
      payeeReference: 'CD1234',
      payeeName: 'Merchant1',
      productCategory: 'A123',
      orderReference: 'or123',
      subsite: 'mySubsite',
    },
  });

  const redirectUrl = purchase.getRedirectAuthorization();

  console.log(`Redirect URL: ${redirectUrl}`);
};

runTransaction();
