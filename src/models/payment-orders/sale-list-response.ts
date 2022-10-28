import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../generics/base-model';
import { SaleListItem } from './sale-list-item';

export class SaleListResponse extends BaseModel{
    @v.IsUrl()
    id: URL;
    @v.ValidateNested()
    @Type(() => SaleListItem)
    saleList: SaleListItem[];
}