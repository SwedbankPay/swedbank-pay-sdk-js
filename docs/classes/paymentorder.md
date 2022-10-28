[@swedbank-pay/sdk](../README.md) › [PaymentOrder](paymentorder.md)

# Class: PaymentOrder

## Hierarchy

- [SwedbankBase](swedbankbase.md)

  ↳ **PaymentOrder**

## Index

### Constructors

- [constructor](paymentorder.md#constructor)

### Properties

- [\_operations](paymentorder.md#private-_operations)
- [config](paymentorder.md#config)
- [paymentOrder](paymentorder.md#paymentorder)

### Methods

- [GenericResource](paymentorder.md#genericresource)
- [create](paymentorder.md#create)
- [createPurchase](paymentorder.md#createpurchase)
- [get](paymentorder.md#get)
- [getOperations](paymentorder.md#getoperations)
- [getUrl](paymentorder.md#geturl)
- [request](paymentorder.md#request)
- [runOperation](paymentorder.md#runoperation)

## Constructors

### constructor

\+ **new PaymentOrder**(`config`: MerchantConfig):
_[PaymentOrder](paymentorder.md)_

_Overrides
[SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)_

**Parameters:**

| Name     | Type           |
| -------- | -------------- |
| `config` | MerchantConfig |

**Returns:** _[PaymentOrder](paymentorder.md)_

## Properties

### `Private` \_operations

• **\_operations**: _Operation[]_

---

### config

• **config**: _MerchantConfig_

_Inherited from
[SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)_

---

### paymentOrder

• **paymentOrder**: _PaymentOrderProperties_

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

### create

▸ **create**(`item`: PaymentOrderRequest):
_Promise‹[PaymentOrderResponse](paymentorderresponse.md)›_

**Parameters:**

| Name   | Type                |
| ------ | ------------------- |
| `item` | PaymentOrderRequest |

**Returns:** _Promise‹[PaymentOrderResponse](paymentorderresponse.md)›_

---

### createPurchase

▸ **createPurchase**(`item`: [PurchaseInput](../README.md#purchaseinput)):
_Promise‹Purchase›_

**Parameters:**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| `item` | [PurchaseInput](../README.md#purchaseinput) |

**Returns:** _Promise‹Purchase›_

---

### get

▸ **get**(`id`: string):
_Promise‹[PaymentOrderResponse](paymentorderresponse.md)›_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `id` | string |

**Returns:** _Promise‹[PaymentOrderResponse](paymentorderresponse.md)›_

---

### getOperations

▸ **getOperations**(): _Operation[]_

**Returns:** _Operation[]_

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
