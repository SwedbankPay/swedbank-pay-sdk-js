export const payment_response = {
  payment: {
    id: '/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28',
    number: 10191467653,
    created: '2020-04-05T10:55:14.4422589Z',
    updated: '2020-04-05T10:55:14.7170276Z',
    instrument: 'CreditCard',
    operation: 'Purchase',
    intent: 'Authorization',
    state: 'Ready',
    currency: 'NOK',
    prices: {
      id:
        '/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28/prices',
    },
    amount: 0,
    description: 'This is a test purchase.',
    initiatingSystemUserAgent: 'swedbank@swedbank-pay-js/0.0.0',
    userAgent: 'Mozilla/5.0',
    language: 'nb-NO',
    urls: {
      id: '/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28/urls',
    },
    payeeInfo: {
      id:
        '/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28/payeeinfo',
    },
    metadata: {
      id:
        '/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28/metadata',
    },
  },
  operations: [
    {
      method: 'PATCH',
      href:
        'https://api.payex.com/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28',
      rel: 'update-payment-abort',
      contentType: 'application/json',
    },
    {
      method: 'GET',
      href:
        'https://psp-ecommerce.payex.com/creditcardv2/payments/authorize/122fd2460cc4a6417603277d503703b71dfe5d1221f432846de4e39ca9873832',
      rel: 'redirect-authorization',
      contentType: 'text/html',
    },
  ],
};
