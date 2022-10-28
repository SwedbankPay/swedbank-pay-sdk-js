[@swedbank-pay/sdk](../README.md) › [SwedbankBase](swedbankbase.md)

# Class: SwedbankBase

## Hierarchy

- **SwedbankBase**

  ↳ [Payment](payment.md)

  ↳ [CardPayment](cardpayment.md)

  ↳ [PaymentOrder](paymentorder.md)

## Index

### Constructors

- [constructor](swedbankbase.md#constructor)

### Properties

- [config](swedbankbase.md#config)

### Methods

- [GenericResource](swedbankbase.md#genericresource)
- [getUrl](swedbankbase.md#geturl)
- [request](swedbankbase.md#request)
- [runOperation](swedbankbase.md#runoperation)

### Object literals

- [apiUrls](swedbankbase.md#private-apiurls)

## Constructors

### constructor

\+ **new SwedbankBase**(`config`: MerchantConfig):
_[SwedbankBase](swedbankbase.md)_

**Parameters:**

| Name     | Type           |
| -------- | -------------- |
| `config` | MerchantConfig |

**Returns:** _[SwedbankBase](swedbankbase.md)_

## Properties

### config

• **config**: _MerchantConfig_

## Methods

### GenericResource

▸ **GenericResource**‹**T**›(`id?`: string): _Promise‹T›_

**Type parameters:**

▪ **T**

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `id?` | string |

**Returns:** _Promise‹T›_

---

### getUrl

▸ **getUrl**(`env?`: 'test' | 'prod'): _string_

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

**Type parameters:**

▪ **T**

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `url`     | string |
| `body?`   | object |
| `method?` | Method |

**Returns:** _Promise‹Response‹T››_

## Object literals

### `Private` apiUrls

### ▪ **apiUrls**: _object_

### prod

• **prod**: _string_ = 'https://api.payex.com'

### test

• **test**: _string_ = 'https://api.externalintegration.payex.com'
