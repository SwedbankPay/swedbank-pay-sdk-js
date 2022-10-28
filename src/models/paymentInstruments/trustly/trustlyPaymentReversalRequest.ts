import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TrustlyReversalTransaction } from './trustlyReversalTransaction';

export class TrustlyPaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => TrustlyReversalTransaction)
    transaction: TrustlyReversalTransaction;
}