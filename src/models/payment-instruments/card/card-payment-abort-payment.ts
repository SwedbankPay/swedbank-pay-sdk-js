import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class CardPaymentAbortPayment extends BaseModel{
    @v.IsString()
    operation: string;

    @v.IsString()
    abortReason: string;
}