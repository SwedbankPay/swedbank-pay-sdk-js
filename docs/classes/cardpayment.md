[@swedbank-pay/sdk](../README.md) › [CardPayment](cardpayment.md)

# Class: CardPayment

## Hierarchy

* [SwedbankBase](swedbankbase.md)

  ↳ **CardPayment**

## Index

### Constructors

* [constructor](cardpayment.md#constructor)

### Properties

* [config](cardpayment.md#config)

### Methods

* [GenericResource](cardpayment.md#genericresource)
* [create](cardpayment.md#private-create)
* [createPurchase](cardpayment.md#createpurchase)
* [get](cardpayment.md#get)
* [getUrl](cardpayment.md#geturl)
* [request](cardpayment.md#request)
* [runOperation](cardpayment.md#runoperation)

## Constructors

###  constructor

\+ **new CardPayment**(`config`: MerchantConfig): *[CardPayment](cardpayment.md)*

*Overrides [SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)*

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

Name | Type |
------ | ------ |
`config` | MerchantConfig |

**Returns:** *[CardPayment](cardpayment.md)*

## Properties

###  config

• **config**: *MerchantConfig*

*Inherited from [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)*

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

### `Private` create

▸ **create**(`item`: PaymentRequest): *Promise‹[PaymentResponse](../interfaces/paymentresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | PaymentRequest |

**Returns:** *Promise‹[PaymentResponse](../interfaces/paymentresponse.md)›*

___

###  createPurchase

▸ **createPurchase**(`item`: [PurchaseInput](../README.md#purchaseinput)): *Promise‹[Purchase](purchase.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [PurchaseInput](../README.md#purchaseinput) |

**Returns:** *Promise‹[Purchase](purchase.md)›*

___

###  get

▸ **get**(`id`: string): *Promise‹[Payment](payment.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[Payment](payment.md)›*

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
