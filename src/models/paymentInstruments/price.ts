import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Amount } from "../amount";
import { PriceType } from "../enums/priceType";
import { ValidateNested } from 'class-validator';

export class Price extends BaseModel {
    @v.ValidateNested()
    amount: Amount;
    
    @ValidateNested()
    vatAmount: Amount;

    @v.IsEnum(PriceType)
    type: PriceType;
}