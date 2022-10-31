import { PaymentOrderRequest } from '../models/payment-order-request';

export const PaymentOrderRequestExample = {
  paymentorder: {
    operation: 'Purchase',
    currency: 'NOK',
    amount: 1000,
    vatAmount: 0,
    description: 'Test',
    userAgent: 'SDK',
    language: 'nb-NO',
    generateRecurrenceToken: false,
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
    orderItems: [
      {
        amount: 1000,
        vatAmount: 0,
        class: 'Item',
        name: 'item',
        type: 'OTHER',
        quantity: 1,
        quantityUnit: 'items',
        unitPrice: 1000,
        vatPercent: 0,
      },
    ],
  },
} as PaymentOrderRequest;
