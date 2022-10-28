export const payment_order_response_example = {
  paymentOrder: {
    id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce',
    created: '2018-09-14T13:21:29.3182115Z',
    updated: '2018-09-14T13:21:57.6627579Z',
    operation: 'Purchase',
    state: 'Ready',
    currency: 'SEK',
    amount: 1500,
    vatAmount: 0,
    remainingCaptureAmount: 1500,
    remainingCancellationAmount: 1500,
    remainingReversalAmount: 0,
    description: 'Test Purchase',
    initiatingSystemUserAgent: 'PostmanRuntime/3.0.1',
    userAgent: 'Mozilla/5.0...',
    language: 'nb-NO',
    urls: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/urls',
    },
    payeeInfo: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/payeeinfo',
    },
    settings: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/settings',
    },
    payers: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/payers',
    },
    orderItems: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/orderItems',
    },
    metadata: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/metadata',
    },
    payments: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/payments',
    },
    currentPayment: {
      id: '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/currentpayment',
    },
  },
  operations: [
    {
      method: 'PATCH',
      href: 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce',
      rel: 'update-paymentorder-abort',
      contentType: 'application/json',
    },
    {
      method: 'GET',
      href: 'https://ecom.externalintegration.payex.com/paymentmenu/5a17c24e-d459-4567-bbad-aa0f17a76119',
      rel: 'redirect-paymentorder',
      contentType: 'text/html',
    },
    {
      method: 'GET',
      href: 'https://ecom.externalintegration.payex.com/paymentmenu/core/scripts/client/px.paymentmenu.client.js?token=5a17c24e-d459-4567-bbad-aa0f17a76119&culture=nb-NO',
      rel: 'view-paymentorder',
      contentType: 'application/javascript',
    },
  ],
};
