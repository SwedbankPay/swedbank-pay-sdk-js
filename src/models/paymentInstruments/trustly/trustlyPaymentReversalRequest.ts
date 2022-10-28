import { BaseModel } from '../../generics/baseModel';
import { TrustlyReversalTransaction } from './trustlyReversalTransaction';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class TrustlyPaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => TrustlyReversalTransaction)
    transaction: TrustlyReversalTransaction;
}