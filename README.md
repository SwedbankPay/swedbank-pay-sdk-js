# PayEx PSP Payments API Library for Node [![Build Status](https://travis-ci.org/Bjerkio/PayEx.Ecommerce.Node.svg?branch=master)](https://travis-ci.org/Bjerkio/PayEx.Ecommerce.Node)

## Description ##
PayEx Payments API Library for Node provide library work with PayEx Payments API.

## Documentation ##
https://developer.payex.com/

## Installation ##

**Install via npm:**
  ```bash
  npm install payex
  ```

## Examples ##

**Typescript**
  ```javascript
  import { CardPayments } from 'payex';

  const payex = new CardPayments({
    merchantToken: 'xxxx-xxxx-xxxx', // Merchant Token from admin.payex.com
    sessionId: 'xxx-xxx-xxx', // Session ID. If not given, Payex will generate.
    consumerIp: 'xxx.xxx.xxx.xxx', // The endusers IP address
    testMode: false // If true, testing URLs are used.
  })

  payex.initiate({
    operation: 'Purchase'
    // … in accordance of: https://developer.payex.com/xwiki/wiki/developer/view/Main/ecommerce/technical-reference/card-payments/#HCreatePayment
  }).then(payment => {
    // Save stuff to database …
    //
    // or, work with it!
    payment.capture().then(payment => {
      // Payment is captured.
    });
  });

  ```
