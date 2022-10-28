import * as v from 'class-validator'
import { BaseModel } from '../../generics/baseModel';

export class SwishRequestData extends BaseModel{
    @v.IsBoolean()
    enableEcomOnly: boolean;
}