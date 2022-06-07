import * as v from 'class-validator';
import { BaseModel } from "../generics/baseModel";

export class Invoice extends BaseModel{
    @v.IsString()
    feeAmount?: number;
}