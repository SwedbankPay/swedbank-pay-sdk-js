import * as v from 'class-validator'
import { BaseModel } from '../../generics/baseModel';

export class PaymentOrderCancelTransaction extends BaseModel{
    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}