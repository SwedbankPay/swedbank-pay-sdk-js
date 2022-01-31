import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";

export class CaptureResponse extends BaseModel {
    @v.IsUrl()
    payment: URL;

    @v.ValidateNested()
    @Type(() => Transaction)
    capture: Transaction;
}