import * as v from 'class-validator';
import { PriceType } from '../enums/price-type';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/base-model';

export class Price extends BaseModel {
  @v.ValidateNested()
  amount: Amount;

  @v.ValidateNested()
  vatAmount: Amount;

  @v.IsEnum(PriceType)
  type: PriceType;
}
