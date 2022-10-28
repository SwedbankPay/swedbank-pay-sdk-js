import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { ReversalResponse } from './reversal-response';

export class ReversalListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => ReversalResponse)
    reversalList: ReversalResponse[];
}