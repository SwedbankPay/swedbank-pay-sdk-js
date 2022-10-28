import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Amount } from '../generics/amount';
import { PriceType } from '../enums/priceType';

export class Price extends BaseModel {
    @v.ValidateNested()
    amount: Amount;
    
    @v.ValidateNested()
    vatAmount: Amount;

    @v.IsEnum(PriceType)
    type: PriceType;
}