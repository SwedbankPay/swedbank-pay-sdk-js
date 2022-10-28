import { Type } from 'class-transformer';
import * as v from 'class-validator'
import { BaseModel } from '../../generics/baseModel';
import { ReversalRequestDetails } from './reversalTransaction';

export class InvoicePaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => ReversalRequestDetails)
    transaction: ReversalRequestDetails;
}