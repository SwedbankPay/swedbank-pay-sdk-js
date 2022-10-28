[@swedbank-pay/sdk](../README.md) ›
[PaymentOrderResponse](paymentorderresponse.md)

# Class: PaymentOrderResponse

## Hierarchy

↳ [Payment](payment.md)

↳ **PaymentOrderResponse**

↳ [Purchase](purchase.md)

## Index

### Constructors

- [constructor](paymentorderresponse.md#constructor)

### Properties

- [amount](paymentorderresponse.md#amount)
- [config](paymentorderresponse.md#config)
- [created](paymentorderresponse.md#created)
- [description](paymentorderresponse.md#description)
- [id](paymentorderresponse.md#id)
- [initiatingSystemUserAgent](paymentorderresponse.md#initiatingsystemuseragent)
- [instrument](paymentorderresponse.md#instrument)
- [language](paymentorderresponse.md#language)
- [number](paymentorderresponse.md#number)
- [operations](paymentorderresponse.md#operations)
- [payerReference](paymentorderresponse.md#payerreference)
- [paymentOrder](paymentorderresponse.md#paymentorder)
- [remainingCancellationAmount](paymentorderresponse.md#remainingcancellationamount)
- [remainingCaptureAmount](paymentorderresponse.md#remainingcaptureamount)
- [remainingReversalAmount](paymentorderresponse.md#remainingreversalamount)
- [state](paymentorderresponse.md#state)
- [updated](paymentorderresponse.md#updated)
- [userAgent](paymentorderresponse.md#useragent)

### Methods

- [GenericResource](paymentorderresponse.md#genericresource)
- [getOperations](paymentorderresponse.md#getoperations)
- [getPrices](paymentorderresponse.md#getprices)
- [getUrl](paymentorderresponse.md#geturl)
- [request](paymentorderresponse.md#request)
- [runOperation](paymentorderresponse.md#runoperation)

## Constructors

### constructor

\+ **new PaymentOrderResponse**(`config`: MerchantConfig, `response`: object):
_[PaymentOrderResponse](paymentorderresponse.md)_

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

**Returns:** _[PaymentOrderResponse](paymentorderresponse.md)_

## Properties

### amount

• **amount**: _number_

_Inherited from [Payment](payment.md).[amount](payment.md#amount)_

---

### config

• **config**: _MerchantConfig_

_Inherited from
[SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

---

### created

• **created**: _Date_

_Inherited from [Payment](payment.md).[created](payment.md#created)_

---

### description

• **description**: _string_

_Inherited from [Payment](payment.md).[description](payment.md#description)_

---

### id

• **id**: _string_

_Inherited from [Payment](payment.md).[id](payment.md#id)_

---

### initiatingSystemUserAgent

• **initiatingSystemUserAgent**: _string_

_Inherited from
[Payment](payment.md).[initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)_

---

### instrument

• **instrument**: _string_

_Inherited from [Payment](payment.md).[instrument](payment.md#instrument)_

---

### language

• **language**: _string_

_Inherited from [Payment](payment.md).[language](payment.md#language)_

---

### number

• **number**: _number_

_Inherited from [Payment](payment.md).[number](payment.md#number)_

---

### operations

• **operations**: _Operation[]_

---

### payerReference

• **payerReference**: _string_

_Inherited from
[Payment](payment.md).[payerReference](payment.md#payerreference)_

---

### paymentOrder

• **paymentOrder**: _PaymentOrderProperties_

---

### remainingCancellationAmount

• **remainingCancellationAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingCancellationAmount](payment.md#remainingcancellationamount)_

---

### remainingCaptureAmount

• **remainingCaptureAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingCaptureAmount](payment.md#remainingcaptureamount)_

---

### remainingReversalAmount

• **remainingReversalAmount**: _number_

_Inherited from
[Payment](payment.md).[remainingReversalAmount](payment.md#remainingreversalamount)_

---

### state

• **state**: _string_

_Inherited from [Payment](payment.md).[state](payment.md#state)_

---

### updated

• **updated**: _Date_

_Inherited from [Payment](payment.md).[updated](payment.md#updated)_

---

### userAgent

• **userAgent**: _string_

_Inherited from [Payment](payment.md).[userAgent](payment.md#useragent)_

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

### getOperations

▸ **getOperations**(): _Operation[]_

_Inherited from [Payment](payment.md).[getOperations](payment.md#getoperations)_

**Returns:** _Operation[]_

---

### getPrices

▸ **getPrices**(): _Promise‹Price[]›_

_Inherited from [Payment](payment.md).[getPrices](payment.md#getprices)_

**Returns:** _Promise‹Price[]›_

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
