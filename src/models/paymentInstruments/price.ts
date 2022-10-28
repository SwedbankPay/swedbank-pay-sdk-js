import * as v from 'class-validator';
import { PriceType } from '../enums/priceType';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/baseModel';

export class Price extends BaseModel {
    @v.ValidateNested()
    amount: Amount;
    
    @v.ValidateNested()
    vatAmount: Amount;

    @v.IsEnum(PriceType)
    type: PriceType;
}