import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { SwishSaleListItem } from './swish-sale-list-item';

export class SwishSaleListResponse extends Identifiable {
  @v.IsArray()
  @v.ValidateNested()
  @Type(() => SwishSaleListItem)
  saleList: SwishSaleListItem[];
}
