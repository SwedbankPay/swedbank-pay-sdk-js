export default {
  'payment': {
    'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1',
    'number': 1234567890,
    'created': '2016-09-14T13:21:29.3182115Z',
    'updated': '2016-09-14T13:21:57.6627579Z',
    'operation': 'Verify',
    'state': 'Ready',
    'currency': 'NOK',
    'amount': 0,
    'description': 'Test Verification',
    'payerReference': 'AB1234',
    'initiatingSystemUserAgent': 'PostmanRuntime/3.0.1',
    'userAgent': 'Mozilla/5.0',
    'language': 'nb-NO',
    'transactions': { 'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/transactions' },
    'verifications': { 'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/verifications' },
    'urls': { 'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/urls' },
    'payeeInfo': { 'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/payeeInfo' },
    'settings': { 'id': '/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/settings' }
  },
  'operations': [
    {
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1',
      'rel': 'update-payment-abort',
      'method': 'PATCH',
      'contentType': 'application/json'
    },
    {
      'href': 'https://ecom.externalintegration.payex.com/paymentorders/payments/verification/5a17c24e-d459-4567-bbad-aa0f17a76119',
      'rel': 'redirect-verification',
      'method': 'GET',
      'contentType': 'application/json'
    },
    {
      'method': 'GET',
      'href': 'https://ecom.externalintegration.payex.com/paymentorders/core/scripts/client/px.paymentorders.client.js?token=5a17c24e-d459-4567-bbad-aa0f17a76119',
      'rel': 'view-verification',
      'contentType': 'application/javascript'
    },
    {
      'method': 'POST',
      'href': 'https://ecom.externalintegration.payex.com/psp/paymentorders/confined/payments/7e6cdfc3-1276-44e9-9992-7cf4419750e1/verifications',
      'rel': 'direct-verification',
      'contentType': 'application/json'
    }
  ]
}