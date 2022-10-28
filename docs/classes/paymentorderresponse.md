[@swedbank-pay/sdk](../README.md) › [PaymentOrderResponse](paymentorderresponse.md)

# Class: PaymentOrderResponse

## Hierarchy

  ↳ [Payment](payment.md)

  ↳ **PaymentOrderResponse**

  ↳ [Purchase](purchase.md)

## Index

### Constructors

* [constructor](paymentorderresponse.md#constructor)

### Properties

* [amount](paymentorderresponse.md#amount)
* [config](paymentorderresponse.md#config)
* [created](paymentorderresponse.md#created)
* [description](paymentorderresponse.md#description)
* [id](paymentorderresponse.md#id)
* [initiatingSystemUserAgent](paymentorderresponse.md#initiatingsystemuseragent)
* [instrument](paymentorderresponse.md#instrument)
* [language](paymentorderresponse.md#language)
* [number](paymentorderresponse.md#number)
* [operations](paymentorderresponse.md#operations)
* [payerReference](paymentorderresponse.md#payerreference)
* [paymentOrder](paymentorderresponse.md#paymentorder)
* [remainingCancellationAmount](paymentorderresponse.md#remainingcancellationamount)
* [remainingCaptureAmount](paymentorderresponse.md#remainingcaptureamount)
* [remainingReversalAmount](paymentorderresponse.md#remainingreversalamount)
* [state](paymentorderresponse.md#state)
* [updated](paymentorderresponse.md#updated)
* [userAgent](paymentorderresponse.md#useragent)

### Methods

* [GenericResource](paymentorderresponse.md#genericresource)
* [getOperations](paymentorderresponse.md#getoperations)
* [getPrices](paymentorderresponse.md#getprices)
* [getUrl](paymentorderresponse.md#geturl)
* [request](paymentorderresponse.md#request)
* [runOperation](paymentorderresponse.md#runoperation)

## Constructors

###  constructor

\+ **new PaymentOrderResponse**(`config`: MerchantConfig, `response`: object): *[PaymentOrderResponse](paymentorderresponse.md)*

*Inherited from [Payment](payment.md).[constructor](payment.md#constructor)*

*Overrides [SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)*

**Parameters:**

▪ **config**: *MerchantConfig*

▪ **response**: *object*

Name | Type |
------ | ------ |
`operations` | Operation[] |
`payment` | [PaymentProperties](../interfaces/paymentproperties.md) |

**Returns:** *[PaymentOrderResponse](paymentorderresponse.md)*

## Properties

###  amount

• **amount**: *number*

*Inherited from [Payment](payment.md).[amount](payment.md#amount)*

___

###  config

• **config**: *MerchantConfig*

*Inherited from [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)*

___

###  created

• **created**: *Date*

*Inherited from [Payment](payment.md).[created](payment.md#created)*

___

###  description

• **description**: *string*

*Inherited from [Payment](payment.md).[description](payment.md#description)*

___

###  id

• **id**: *string*

*Inherited from [Payment](payment.md).[id](payment.md#id)*

___

###  initiatingSystemUserAgent

• **initiatingSystemUserAgent**: *string*

*Inherited from [Payment](payment.md).[initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)*

___

###  instrument

• **instrument**: *string*

*Inherited from [Payment](payment.md).[instrument](payment.md#instrument)*

___

###  language

• **language**: *string*

*Inherited from [Payment](payment.md).[language](payment.md#language)*

___

###  number

• **number**: *number*

*Inherited from [Payment](payment.md).[number](payment.md#number)*

___

###  operations

• **operations**: *Operation[]*

___

###  payerReference

• **payerReference**: *string*

*Inherited from [Payment](payment.md).[payerReference](payment.md#payerreference)*

___

###  paymentOrder

• **paymentOrder**: *PaymentOrderProperties*

___

###  remainingCancellationAmount

• **remainingCancellationAmount**: *number*

*Inherited from [Payment](payment.md).[remainingCancellationAmount](payment.md#remainingcancellationamount)*

___

###  remainingCaptureAmount

• **remainingCaptureAmount**: *number*

*Inherited from [Payment](payment.md).[remainingCaptureAmount](payment.md#remainingcaptureamount)*

___

###  remainingReversalAmount

• **remainingReversalAmount**: *number*

*Inherited from [Payment](payment.md).[remainingReversalAmount](payment.md#remainingreversalamount)*

___

###  state

• **state**: *string*

*Inherited from [Payment](payment.md).[state](payment.md#state)*

___

###  updated

• **updated**: *Date*

*Inherited from [Payment](payment.md).[updated](payment.md#updated)*

___

###  userAgent

• **userAgent**: *string*

*Inherited from [Payment](payment.md).[userAgent](payment.md#useragent)*

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

*Inherited from [Payment](payment.md).[getOperations](payment.md#getoperations)*

**Returns:** *Operation[]*

___

###  getPrices

▸ **getPrices**(): *Promise‹Price[]›*

*Inherited from [Payment](payment.md).[getPrices](payment.md#getprices)*

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
