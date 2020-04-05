import { PaymentRequest } from '../models/PaymentRequest';
export default {
  payment: {
    operation: 'Purchase',
    intent: 'Authorization',
    currency: 'NOK',
    prices: [
      {
        type: 'CreditCard',
        amount: 1500,
        vatAmount: 0,
      },
    ],
    description: 'This is a test purchase.',
    generatePaymentToken: false,
    generateRecurrenceToken: true,
    userAgent: 'Mozilla/5.0',
    language: 'nb-NO',
    urls: {
      completeUrl: 'https://example.com/payment-completed',
      cancelUrl: 'https://example.com/payment-canceled',
      callbackUrl: 'https://example.com/payment-callback',
      logoUrl: 'https://example.com/payment-logo.png',
      termsOfServiceUrl: 'https://example.com/payment-terms.pdf',
    },
    payeeInfo: {
      payeeId: 'dc1543f2-ffa4-4f20-8e26-8db65603465d',
      payeeReference: 'CD1234',
      payeeName: 'Merchant1',
      productCategory: 'A123',
      orderReference: 'or123',
      subsite: 'mySubsite',
    },
  },
} as PaymentRequest;
