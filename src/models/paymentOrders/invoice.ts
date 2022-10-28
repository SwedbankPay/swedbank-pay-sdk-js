import * as v from 'class-validator';
import { BaseModel } from '../generics/base-model';

export class Invoice extends BaseModel{
    @v.IsString()
    feeAmount?: number;
}