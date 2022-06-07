import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";
import { Type } from 'class-transformer';

export class CancellationListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Transaction)
    cancellationList: Transaction[];
}