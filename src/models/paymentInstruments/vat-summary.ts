import { Type } from 'class-transformer'
import * as v from 'class-validator';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/base-model';

export class VatSummary extends BaseModel{
    @Type(() => Amount)
    @v.ValidateNested()
    amount: Amount;

    @v.IsString()
    vatPercent: string;

    @Type(() => Amount)
    @v.ValidateNested()
    vatAmount: Amount;
}