import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/baseModel';

export class ItemDescription extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;
}