[@swedbank-pay/sdk](../README.md) › [Purchase](purchase.md)

# Class: Purchase

## Hierarchy

↳ [Payment](payment.md)

↳ [PaymentOrderResponse](paymentorderresponse.md)

↳ **Purchase**

## Index

### Constructors

- [constructor](purchase.md#constructor)

### Properties

- [amount](purchase.md#amount)
- [config](purchase.md#config)
- [created](purchase.md#created)
- [description](purchase.md#description)
- [id](purchase.md#id)
- [initiatingSystemUserAgent](purchase.md#initiatingsystemuseragent)
- [instrument](purchase.md#instrument)
- [language](purchase.md#language)
- [number](purchase.md#number)
- [operations](purchase.md#operations)
- [payerReference](purchase.md#payerreference)
- [paymentOrder](purchase.md#paymentorder)
- [remainingCancellationAmount](purchase.md#remainingcancellationamount)
- [remainingCaptureAmount](purchase.md#remainingcaptureamount)
- [remainingReversalAmount](purchase.md#remainingreversalamount)
- [state](purchase.md#state)
- [updated](purchase.md#updated)
- [userAgent](purchase.md#useragent)

### Methods

- [GenericResource](purchase.md#genericresource)
- [getOperations](purchase.md#getoperations)
- [getPrices](purchase.md#getprices)
- [getRedirectAuthorization](purchase.md#getredirectauthorization)
- [getUrl](purchase.md#geturl)
- [request](purchase.md#request)
- [runOperation](purchase.md#runoperation)

## Constructors

### constructor

\+ **new Purchase**(`config`: MerchantConfig, `response`: object):
_[Purchase](purchase.md)_

_Inherited from [Payment](payment.md).[constructor](payment.md#constructor)_

_Overrides
[SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)_

**Parameters:**

▪ **config**: _MerchantConfig_

▪ **response**: _object_

| Name         | Type                                                    |
| ------------ | ------------------------------------------------------- |
| `operations` | Operation[]                                             |
| `payment`    | [PaymentProperties](../interfaces/paymentproperties.md) |

**Returns:** _[Purchase](purchase.md)_

## Properties

### amount

• **amount**: _number_

_Inherited from [Payment](payment.md).[amount](payment.md#amount)_

_Overrides [Payment](payment.md).[amount](payment.md#amount)_

---

### config

• **config**: _MerchantConfig_

_Inherited from
[SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

_Overrides [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

---

### created

• **created**: _Date_

_Inherited from [Payment](payment.md).[created](payment.md#created)_

_Overrides [Payment](payment.md).[created](payment.md#created)_

---

### description

• **description**: _string_

_Inherited from [Payment](payment.md).[description](payment.md#description)_

_Overrides [Payment](payment.md).[description](payment.md#description)_

---

### id

• **id**: _string_

_Inherited from [Payment](payment.md).[id](payment.md#id)_

_Overrides [Payment](payment.md).[id](payment.md#id)_

---

### initiatingSystemUserAgent

• **initiatingSystemUserAgent**: _string_

_Inherited from
[Payment](payment.md).[initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)_

_Overrides
[Payment](payment.md).[initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)_

---

### instrument

• **instrument**: _string_

_Inherited from [Payment](payment.md).[instrument](payment.md#instrument)_

_Overrides [Payment](payment.md).[instrument](payment.md#instrument)_

---

### language

• **language**: _string_

_Inherited from [Payment](payment.md).[language](payment.md#language)_

_Overrides [Payment](payment.md).[language](payment.md#language)_

---

### number

• **number**: _number_

_Inherited from [Payment](payment.md).[number](payment.md#number)_

_Overrides [Payment](payment.md).[number](payment.md#number)_

---

### operations

• **operations**: _Operation[]_

_Inherited from
[PaymentOrderResponse](paymentorderresponse.md).[operations](paymentorderresponse.md#operations)_

---

### payerReference

• **payerReference**: _string_

_Inherited from
[Payment](payment.md).[payerReference](payment.md#payerreference)_

_Overrides [Payment](payment.md).[payerReference](payment.md#payerreference)_

---

### paymentOrder

• **paymentOrder**: _PaymentOrderProperties_

_Inherited from
[PaymentOrderResponse](paymentorderresponse.md).[paymentOrder](paymentorderresponse.md#paymentorder)_

---

### remainingCancellationAmount

• **remainingCancellationAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingCancellationAmount](payment.md#remainingcancellationamount)_

_Overrides
[Payment](payment.md).[remainingCancellationAmount](payment.md#remainingcancellationamount)_

---

### remainingCaptureAmount

• **remainingCaptureAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingCaptureAmount](payment.md#remainingcaptureamount)_

_Overrides
[Payment](payment.md).[remainingCaptureAmount](payment.md#remainingcaptureamount)_

---

### remainingReversalAmount

• **remainingReversalAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingReversalAmount](payment.md#remainingreversalamount)_

_Overrides
[Payment](payment.md).[remainingReversalAmount](payment.md#remainingreversalamount)_

---

### state

• **state**: _string_

_Inherited from [Payment](payment.md).[state](payment.md#state)_

_Overrides [Payment](payment.md).[state](payment.md#state)_

---

### updated

• **updated**: _Date_

_Inherited from [Payment](payment.md).[updated](payment.md#updated)_

_Overrides [Payment](payment.md).[updated](payment.md#updated)_

---

### userAgent

• **userAgent**: _string_

_Inherited from [Payment](payment.md).[userAgent](payment.md#useragent)_

_Overrides [Payment](payment.md).[userAgent](payment.md#useragent)_

## Methods

### GenericResource

▸ **GenericResource**‹**T**›(`id?`: string): _Promise‹T›_

_Inherited from
[SwedbankBase](swedbankbase.md).[GenericResource](swedbankbase.md#genericresource)_

_Overrides
[SwedbankBase](swedbankbase.md).[GenericResource](swedbankbase.md#genericresource)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `id?` | string |

**Returns:** _Promise‹T›_

---

### getOperations

▸ **getOperations**(): _Operation[]_

_Inherited from [Payment](payment.md).[getOperations](payment.md#getoperations)_

_Overrides [Payment](payment.md).[getOperations](payment.md#getoperations)_

**Returns:** _Operation[]_

---

### getPrices

▸ **getPrices**(): _Promise‹Price[]›_

_Inherited from [Payment](payment.md).[getPrices](payment.md#getprices)_

_Overrides [Payment](payment.md).[getPrices](payment.md#getprices)_

**Returns:** _Promise‹Price[]›_

---

### getRedirectAuthorization

▸ **getRedirectAuthorization**(): _string_

**Returns:** _string_

---

### getUrl

▸ **getUrl**(`env?`: 'test' | 'prod'): _string_

_Inherited from
[SwedbankBase](swedbankbase.md).[getUrl](swedbankbase.md#geturl)_

_Overrides [SwedbankBase](swedbankbase.md).[getUrl](swedbankbase.md#geturl)_

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

_Overrides [SwedbankBase](swedbankbase.md).[request](swedbankbase.md#request)_

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

_Overrides
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
