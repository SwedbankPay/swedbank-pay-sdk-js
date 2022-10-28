import { BaseModel } from '../../generics/baseModel';
import * as v from 'class-validator';

export class CardPaymentAbortPayment extends BaseModel{
    @v.IsString()
    operation: string;

    @v.IsString()
    abortReason: string;
}