[@swedbank-pay/sdk](../README.md) › [Payment](payment.md)

# Class: Payment

## Hierarchy

* [SwedbankBase](swedbankbase.md)

  ↳ **Payment**

  ↳ [Purchase](purchase.md)

  ↳ [PaymentOrderResponse](paymentorderresponse.md)

## Index

### Constructors

* [constructor](payment.md#constructor)

### Properties

* [_operations](payment.md#private-_operations)
* [amount](payment.md#amount)
* [config](payment.md#config)
* [created](payment.md#created)
* [description](payment.md#description)
* [id](payment.md#id)
* [initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)
* [instrument](payment.md#instrument)
* [language](payment.md#language)
* [number](payment.md#number)
* [payerReference](payment.md#payerreference)
* [prices](payment.md#private-prices)
* [remainingCancellationAmount](payment.md#remainingcancellationamount)
* [remainingCaptureAmount](payment.md#remainingcaptureamount)
* [remainingReversalAmount](payment.md#remainingreversalamount)
* [state](payment.md#state)
* [updated](payment.md#updated)
* [userAgent](payment.md#useragent)

### Methods

* [GenericResource](payment.md#genericresource)
* [getOperations](payment.md#getoperations)
* [getPrices](payment.md#getprices)
* [getUrl](payment.md#geturl)
* [request](payment.md#request)
* [runOperation](payment.md#runoperation)

## Constructors

###  constructor

\+ **new Payment**(`config`: MerchantConfig, `response`: object): *[Payment](payment.md)*

*Overrides [SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)*

**Parameters:**

▪ **config**: *MerchantConfig*

▪ **response**: *object*

Name | Type |
------ | ------ |
`operations` | Operation[] |
`payment` | [PaymentProperties](../interfaces/paymentproperties.md) |

**Returns:** *[Payment](payment.md)*

## Properties

### `Private` _operations

• **_operations**: *Operation[]*

___

###  amount

• **amount**: *number*

___

###  config

• **config**: *MerchantConfig*

*Inherited from [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)*

___

###  created

• **created**: *Date*

___

###  description

• **description**: *string*

___

###  id

• **id**: *string*

___

###  initiatingSystemUserAgent

• **initiatingSystemUserAgent**: *string*

___

###  instrument

• **instrument**: *string*

___

###  language

• **language**: *string*

___

###  number

• **number**: *number*

___

###  payerReference

• **payerReference**: *string*

___

### `Private` prices

• **prices**: *GenericResource*

___

###  remainingCancellationAmount

• **remainingCancellationAmount**: *number*

___

###  remainingCaptureAmount

• **remainingCaptureAmount**: *number*

___

###  remainingReversalAmount

• **remainingReversalAmount**: *number*

___

###  state

• **state**: *string*

___

###  updated

• **updated**: *Date*

___

###  userAgent

• **userAgent**: *string*

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

###  getOperations

▸ **getOperations**(): *Operation[]*

**Returns:** *Operation[]*

___

###  getPrices

▸ **getPrices**(): *Promise‹Price[]›*

**Returns:** *Promise‹Price[]›*

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
