import { BaseModel } from '../../generics/baseModel';
import * as v from 'class-validator'

export class PaymentOrderCancelTransaction extends BaseModel{
    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}