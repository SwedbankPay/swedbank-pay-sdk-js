import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';

export class PaymentOrderAbortRequestDetails extends BaseModel{
    @v.IsString()
    abortReason: string;

    @v.IsString()
    operation: string;
}