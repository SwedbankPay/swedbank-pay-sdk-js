import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { Transaction } from './transaction';

export class CancellationListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Transaction)
    cancellationList: Transaction[];
}