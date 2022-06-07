import { BaseModel } from "../generics/baseModel";
import { SaleListItem } from "./saleListItem";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class SaleListResponse extends BaseModel{
    @v.IsUrl()
    id: URL;
    @v.ValidateNested()
    @Type(() => SaleListItem)
    saleList: SaleListItem[];
}