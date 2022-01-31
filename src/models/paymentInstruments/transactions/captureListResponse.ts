import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";
import { Type } from 'class-transformer';

export class CaptureListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Transaction)
    captureList: Transaction[];
}