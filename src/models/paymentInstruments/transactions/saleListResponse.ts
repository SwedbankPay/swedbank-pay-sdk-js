import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TransactionResponse } from './transactionResponse';

export class SaleListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => TransactionResponse)
    saleList: TransactionResponse[];
}