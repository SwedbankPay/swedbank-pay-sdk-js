import { BaseModel } from '../../generics/baseModel';
import * as v from 'class-validator';

export class PaymentOrderAbortRequestDetails extends BaseModel{
    @v.IsString()
    abortReason: string;

    @v.IsString()
    operation: string;
}