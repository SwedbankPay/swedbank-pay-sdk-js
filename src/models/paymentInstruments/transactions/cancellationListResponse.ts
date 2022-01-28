import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";

export class CancellationListResponse extends BaseModel{
    // TODO: figure how to validate array content
    @v.IsArray()
    cancellationList: Transaction[];
}