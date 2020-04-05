[swedbank-pay - v0.0.0](../README.md) › [SwedbankBase](swedbankbase.md)

# Class: SwedbankBase

## Hierarchy

* **SwedbankBase**

  ↳ [Payment](payment.md)

  ↳ [CardPayment](cardpayment.md)

## Index

### Constructors

* [constructor](swedbankbase.md#constructor)

### Properties

* [config](swedbankbase.md#config)

### Methods

* [GenericResource](swedbankbase.md#genericresource)
* [getUrl](swedbankbase.md#geturl)
* [request](swedbankbase.md#request)
* [runOperation](swedbankbase.md#runoperation)

### Object literals

* [apiUrls](swedbankbase.md#private-apiurls)

## Constructors

###  constructor

\+ **new SwedbankBase**(`config`: MerchantConfig): *[SwedbankBase](swedbankbase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | MerchantConfig |

**Returns:** *[SwedbankBase](swedbankbase.md)*

## Properties

###  config

• **config**: *MerchantConfig*

## Methods

###  GenericResource

▸ **GenericResource**<**T**>(`id?`: string): *Promise‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string |

**Returns:** *Promise‹T›*

___

###  getUrl

▸ **getUrl**(`env?`: "test" | "prod"): *string*

**Parameters:**

Name | Type |
------ | ------ |
`env?` | "test" &#124; "prod" |

**Returns:** *string*

URL to API

___

###  request

▸ **request**<**T**>(`path`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body?` | object |
`method?` | Method |

**Returns:** *Promise‹Response‹T››*

___

###  runOperation

▸ **runOperation**<**T**>(`url`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`body?` | object |
`method?` | Method |

**Returns:** *Promise‹Response‹T››*

## Object literals

### `Private` apiUrls

### ▪ **apiUrls**: *object*

###  prod

• **prod**: *string* = "https://api.payex.com"

###  test

• **test**: *string* = "https://api.externalintegration.payex.com"
