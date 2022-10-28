import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../generics/identifiable';
import { Price } from './price';

export class PriceListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Price)
    priceList: Price[];
}