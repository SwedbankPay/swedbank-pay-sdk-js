import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';

export class CardPaymentAbortPayment extends BaseModel{
    @v.IsString()
    operation: string;

    @v.IsString()
    abortReason: string;
}