import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { TransactionResponse } from './transaction-response';

export class SaleListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => TransactionResponse)
    saleList: TransactionResponse[];
}