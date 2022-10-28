[@swedbank-pay/sdk](../README.md) › [CardPayment](cardpayment.md)

# Class: CardPayment

## Hierarchy

- [SwedbankBase](swedbankbase.md)

  ↳ **CardPayment**

## Index

### Constructors

- [constructor](cardpayment.md#constructor)

### Properties

- [config](cardpayment.md#config)

### Methods

- [GenericResource](cardpayment.md#genericresource)
- [create](cardpayment.md#private-create)
- [createPurchase](cardpayment.md#createpurchase)
- [get](cardpayment.md#get)
- [getUrl](cardpayment.md#geturl)
- [request](cardpayment.md#request)
- [runOperation](cardpayment.md#runoperation)

## Constructors

### constructor

\+ **new CardPayment**(`config`: MerchantConfig):
_[CardPayment](cardpayment.md)_

_Overrides
[SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)_

**`example`**

```typescript
const payments = new CardPayment({
 merchantToken: '88837cjijsgjhguwg8xxmx9ax8ax8x',
 consumerIp,
 sessionId,
});

payment.create({
 intent: 'Authorization',
 ...
})
```

**Parameters:**

| Name     | Type           |
| -------- | -------------- |
| `config` | MerchantConfig |

**Returns:** _[CardPayment](cardpayment.md)_

## Properties

### config

• **config**: _MerchantConfig_

_Inherited from
[SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

## Methods

### GenericResource

▸ **GenericResource**‹**T**›(`id?`: string): _Promise‹T›_

_Inherited from
[SwedbankBase](swedbankbase.md).[GenericResource](swedbankbase.md#genericresource)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `id?` | string |

**Returns:** _Promise‹T›_

---

### `Private` create

▸ **create**(`item`: PaymentRequest):
_Promise‹[PaymentResponse](../interfaces/paymentresponse.md)›_

**Parameters:**

| Name   | Type           |
| ------ | -------------- |
| `item` | PaymentRequest |

**Returns:** _Promise‹[PaymentResponse](../interfaces/paymentresponse.md)›_

---

### createPurchase

▸ **createPurchase**(`item`: [PurchaseInput](../README.md#purchaseinput)):
_Promise‹[Purchase](purchase.md)›_

**Parameters:**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| `item` | [PurchaseInput](../README.md#purchaseinput) |

**Returns:** _Promise‹[Purchase](purchase.md)›_

---

### get

▸ **get**(`id`: string): _Promise‹[Payment](payment.md)›_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `id` | string |

**Returns:** _Promise‹[Payment](payment.md)›_

---

### getUrl

▸ **getUrl**(`env?`: 'test' | 'prod'): _string_

_Inherited from
[SwedbankBase](swedbankbase.md).[getUrl](swedbankbase.md#geturl)_

**Parameters:**

| Name   | Type                 |
| ------ | -------------------- |
| `env?` | 'test' &#124; 'prod' |

**Returns:** _string_

URL to API

---

### request

▸ **request**‹**T**›(`path`: string, `body?`: object, `method?`: Method):
_Promise‹Response‹T››_

_Inherited from
[SwedbankBase](swedbankbase.md).[request](swedbankbase.md#request)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `path`    | string |
| `body?`   | object |
| `method?` | Method |

**Returns:** _Promise‹Response‹T››_

---

### runOperation

▸ **runOperation**‹**T**›(`url`: string, `body?`: object, `method?`: Method):
_Promise‹Response‹T››_

_Inherited from
[SwedbankBase](swedbankbase.md).[runOperation](swedbankbase.md#runoperation)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `url`     | string |
| `body?`   | object |
| `method?` | Method |

**Returns:** _Promise‹Response‹T››_
