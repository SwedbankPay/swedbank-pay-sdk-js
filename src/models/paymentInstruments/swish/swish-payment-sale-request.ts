import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { SwishPaymentSaleTransaction } from './swish-payment-sale-transaction';

export class SwishPaymentSaleRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => SwishPaymentSaleTransaction)
    transaction: SwishPaymentSaleTransaction;
}