export default {
  'paymentOrder': {
    'id': '/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce',
  },
  'operations': [
    {
      'method': 'PATCH',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce',
      'rel': 'update-paymentorder-abort',
      'contentType': 'application/json'
    },
    {
      'method': 'PATCH',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce',
      'rel': 'update-paymentorder-updateorder',
      'contentType': 'application/json'
    },
    {
      'method': 'GET',
      'href': 'https://ecom.externalintegration.payex.com/paymentmenu/5a17c24e-d459-4567-bbad-aa0f17a76119',
      'rel': 'redirect-paymentorder',
      'contentType': 'text/html'
    },
    {
      'method': 'GET',
      'href': 'https://ecom.externalintegration.payex.com/paymentmenu/core/scripts/client/px.paymentmenu.client.js?token=5a17c24e-d459-4567-bbad-aa0f17a76119&culture=nb-NO',
      'rel': 'view-paymentorder',
      'contentType': 'application/javascript'
    },
    {
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/captures',
      'rel': 'create-paymentorder-capture',
      'contentType': 'application/json'
    },
    {
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/cancellations',
      'rel': 'create-paymentorder-cancel',
      'contentType': 'application/json'
    },
    {
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/reversals',
      'rel': 'create-paymentorder-reversal',
      'contentType': 'application/json'
    },
    {
      'method': 'GET',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/paid',
      'rel': 'paid-paymentorder',
      'contentType': 'application/json'
    },
    {
      'method': 'GET',
      'href': 'https://api.externalintegration.payex.com/psp/paymentorders/09ccd29a-7c4f-4752-9396-12100cbfecce/failed',
      'rel': 'failed-paymentorder',
      'contentType': 'application/problem+json'
    },
    {
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/creditcard/7e6cdfc3-1276-44e9-9992-7cf4419750e1/captures',
      'rel': 'create-capture',
      'contentType': 'application/json'
    },
    {
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/creditcard/7e6cdfc3-1276-44e9-9992-7cf4419750e1/cancellations',
      'rel': 'create-cancel',
      'contentType': 'application/json'
    },
    {
      // Deprecated operation. Do not use!
      'method': 'POST',
      'href': 'https://api.externalintegration.payex.com/psp/creditcard/7e6cdfc3-1276-44e9-9992-7cf4419750e1/reversals',
      'rel': 'create-reversal',
      'contentType': 'application/json'
    }
  ]
}