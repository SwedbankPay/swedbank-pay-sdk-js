# Quickstart with Card Redirect Flow

This guide will get you started on using Swedbank Pay.js.

Before you get started, remember that if you are having any issues;
we love get feedback and support you. Please [open an issue](https://github.com/bjerkio/swedbank-pay-js/issues/new) and we'll get back to you as soon as possible. This SDK is maintained by Bjerk AS.

## Prerequisites

- HTTPS enabled web server.
- Agreement with Swedbank Pay that includes the services that you need.
- Obtained credentials (merchant Access Token) from Swedbank Pay Admin.
- Know Swedbank Pay's [purchase flow](https://developer.swedbankpay.com/payments/card/#purchase-flow)

## Introduction

In this quickstart, we'll get you started with Swedbank Pay.js with setting up
credit card redirect flow. 

## (Step 1) Install the package

```
npm install swedbank-pay
```

## (Step 2) Import `CardPayments`

Add `swedbank-pay` into your code by importing like this.

If you're using Typescript:

```typescript
import { CardPayment } from 'swedbank-pay';
```

If you are using Javascript:

```javascript
const swedbank = require('swedbank-pay');
```

## (Step 3) Construct CardPayment class

You'll need the credentials when you are constructing
the `CardPayment` class. If you testing, you can set
`testMode` to `true`.

Read more about CardPayment in our [documentation](../docs/classes/cardpayment.md).

If you're using Typescript:

```typescript
const payment = new CardPayment({
    merchantToken: 'JpeB^pcOFA&#uUwXVXYNZ7K#amJl@!f75286Q0R!sciiJB5!5rQM',
    consumerIp: '1.2.3.4',
    sessionId: 'n7zMx0AT*2RoJ8n#hRkLCNYeC%Y8o74fUn84B7zcW3P%1mBP@m0Q',
});
```

If you are using Javascript:

```javascript
const payment = new swedbank.CardPayment({
    merchantToken: 'JpeB^pcOFA&#uUwXVXYNZ7K#amJl@!f75286Q0R!sciiJB5!5rQM',
    consumerIp: '1.2.3.4',
    sessionId: 'n7zMx0AT*2RoJ8n#hRkLCNYeC%Y8o74fUn84B7zcW3P%1mBP@m0Q',
});
```

## (Step 4) Create a Payment resource with `Purchase` operation

In accordance to [the documentation](https://developer.swedbankpay.com/payments/card/other-features#create-payment), you need to create a [Payment](../docs/classes/payment.md) resource before you can get a redirect URL. In the SDK you have resources
in accordance with operation, meaning in our case you'll create a [Purchase](../docs/classes/purchase.md) resource.

**PS**: There is a lot of variables to enter when creating a Purchase resource. You'll find a [full example](../examples/CardPaymentWithRedirect.ts) among our [examples](../examples). You can also go to [Swedbank Offical Documentation](https://developer.swedbankpay.com/payments/card/other-features#purchase) to find a full description.

```typescript
const purchase = await payment.createPurchase({
    intent: 'Authorization',
});
```

## (Step 5) Retrieve the redirect URL

The function from the previous will send a HTTP request to Swedbank Pay, and it will return a Purchase resource. You can find the JSON object at [their documentation](https://developer.swedbankpay.com/payments/card/other-features#create-payment) under *Response* or check out our [SDK documentation](../docs/classes/purchase.md).

Among functions from the Purchase resource, you'll find `getRedirectAuthorization`. This will give you a string containing
the redirect URL. It looks something like this: `https://psp-ecommerce.payex.com/creditcardv2/payments/authorize/764dbcf974009fe2da2da88e293ee56b4265e09402f342a632941b4e1450b301`

# Next step 🎉

At this point, you'll have a way to authorize payments. However, the next thing should probably be capturing the payments.
Or, if you are in the need of stuff that is not currently a part of this SDK, you can [contribute](../CONTRIBUTING.md)!

Head over to our [issues](https://github.com/bjerkio/swedbank-pay-js/issues) if you need help or are looking to contribute!