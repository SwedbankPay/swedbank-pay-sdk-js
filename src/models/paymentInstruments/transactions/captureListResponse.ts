import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";

export class CaptureListResponse extends BaseModel{
    // TODO: find out how to validate content of array
    @v.IsArray()
    captureList: Transaction[];
}