import * as v from 'class-validator';
import { Type } from 'class-transformer'
import { Amount } from "../generics/amount";
import { BaseModel } from '../generics/baseModel';

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