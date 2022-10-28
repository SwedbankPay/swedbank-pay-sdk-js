[@swedbank-pay/sdk](../README.md) › [PaymentOrder](paymentorder.md)

# Class: PaymentOrder

## Hierarchy

* [SwedbankBase](swedbankbase.md)

  ↳ **PaymentOrder**

## Index

### Constructors

* [constructor](paymentorder.md#constructor)

### Properties

* [_operations](paymentorder.md#private-_operations)
* [config](paymentorder.md#config)
* [paymentOrder](paymentorder.md#paymentorder)

### Methods

* [GenericResource](paymentorder.md#genericresource)
* [create](paymentorder.md#create)
* [createPurchase](paymentorder.md#createpurchase)
* [get](paymentorder.md#get)
* [getOperations](paymentorder.md#getoperations)
* [getUrl](paymentorder.md#geturl)
* [request](paymentorder.md#request)
* [runOperation](paymentorder.md#runoperation)

## Constructors

###  constructor

\+ **new PaymentOrder**(`config`: MerchantConfig): *[PaymentOrder](paymentorder.md)*

*Overrides [SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | MerchantConfig |

**Returns:** *[PaymentOrder](paymentorder.md)*

## Properties

### `Private` _operations

• **_operations**: *Operation[]*

___

###  config

• **config**: *MerchantConfig*

*Inherited from [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)*

___

###  paymentOrder

• **paymentOrder**: *PaymentOrderProperties*

## Methods

###  GenericResource

▸ **GenericResource**‹**T**›(`id?`: string): *Promise‹T›*

*Inherited from [SwedbankBase](swedbankbase.md).[GenericResource](swedbankbase.md#genericresource)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string |

**Returns:** *Promise‹T›*

___

###  create

▸ **create**(`item`: PaymentOrderRequest): *Promise‹[PaymentOrderResponse](paymentorderresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | PaymentOrderRequest |

**Returns:** *Promise‹[PaymentOrderResponse](paymentorderresponse.md)›*

___

###  createPurchase

▸ **createPurchase**(`item`: [PurchaseInput](../README.md#purchaseinput)): *Promise‹Purchase›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [PurchaseInput](../README.md#purchaseinput) |

**Returns:** *Promise‹Purchase›*

___

###  get

▸ **get**(`id`: string): *Promise‹[PaymentOrderResponse](paymentorderresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[PaymentOrderResponse](paymentorderresponse.md)›*

___

###  getOperations

▸ **getOperations**(): *Operation[]*

**Returns:** *Operation[]*

___

###  getUrl

▸ **getUrl**(`env?`: 'test' | 'prod'): *string*

*Inherited from [SwedbankBase](swedbankbase.md).[getUrl](swedbankbase.md#geturl)*

**Parameters:**

Name | Type |
------ | ------ |
`env?` | 'test' &#124; 'prod' |

**Returns:** *string*

URL to API

___

###  request

▸ **request**‹**T**›(`path`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

*Inherited from [SwedbankBase](swedbankbase.md).[request](swedbankbase.md#request)*

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

▸ **runOperation**‹**T**›(`url`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

*Inherited from [SwedbankBase](swedbankbase.md).[runOperation](swedbankbase.md#runoperation)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`body?` | object |
`method?` | Method |

**Returns:** *Promise‹Response‹T››*
