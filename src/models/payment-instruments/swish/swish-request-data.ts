import * as v from 'class-validator'
import { BaseModel } from '../../generics/base-model';

export class SwishRequestData extends BaseModel{
    @v.IsBoolean()
    enableEcomOnly: boolean;
}