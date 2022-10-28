[@swedbank-pay/sdk](../README.md) › [Payment](payment.md)

# Class: Payment

## Hierarchy

- [SwedbankBase](swedbankbase.md)

  ↳ **Payment**

  ↳ [Purchase](purchase.md)

  ↳ [PaymentOrderResponse](paymentorderresponse.md)

## Index

### Constructors

- [constructor](payment.md#constructor)

### Properties

- [\_operations](payment.md#private-_operations)
- [amount](payment.md#amount)
- [config](payment.md#config)
- [created](payment.md#created)
- [description](payment.md#description)
- [id](payment.md#id)
- [initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)
- [instrument](payment.md#instrument)
- [language](payment.md#language)
- [number](payment.md#number)
- [payerReference](payment.md#payerreference)
- [prices](payment.md#private-prices)
- [remainingCancellationAmount](payment.md#remainingcancellationamount)
- [remainingCaptureAmount](payment.md#remainingcaptureamount)
- [remainingReversalAmount](payment.md#remainingreversalamount)
- [state](payment.md#state)
- [updated](payment.md#updated)
- [userAgent](payment.md#useragent)

### Methods

- [GenericResource](payment.md#genericresource)
- [getOperations](payment.md#getoperations)
- [getPrices](payment.md#getprices)
- [getUrl](payment.md#geturl)
- [request](payment.md#request)
- [runOperation](payment.md#runoperation)

## Constructors

### constructor

\+ **new Payment**(`config`: MerchantConfig, `response`: object):
_[Payment](payment.md)_

_Overrides
[SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)_

**Parameters:**

▪ **config**: _MerchantConfig_

▪ **response**: _object_

| Name         | Type                                                    |
| ------------ | ------------------------------------------------------- |
| `operations` | Operation[]                                             |
| `payment`    | [PaymentProperties](../interfaces/paymentproperties.md) |

**Returns:** _[Payment](payment.md)_

## Properties

### `Private` \_operations

• **\_operations**: _Operation[]_

---

### amount

• **amount**: _number_

---

### config

• **config**: _MerchantConfig_

_Inherited from
[SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

---

### created

• **created**: _Date_

---

### description

• **description**: _string_

---

### id

• **id**: _string_

---

### initiatingSystemUserAgent

• **initiatingSystemUserAgent**: _string_

---

### instrument

• **instrument**: _string_

---

### language

• **language**: _string_

---

### number

• **number**: _number_

---

### payerReference

• **payerReference**: _string_

---

### `Private` prices

• **prices**: _GenericResource_

---

### remainingCancellationAmount

• **remainingCancellationAmount**: _number_

---

### remainingCaptureAmount

• **remainingCaptureAmount**: _number_

---

### remainingReversalAmount

• **remainingReversalAmount**: _number_

---

### state

• **state**: _string_

---

### updated

• **updated**: _Date_

---

### userAgent

• **userAgent**: _string_

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

**Returns:** _Operation[]_

---

### getPrices

▸ **getPrices**(): _Promise‹Price[]›_

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
