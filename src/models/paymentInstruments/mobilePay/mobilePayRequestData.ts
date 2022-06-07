import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';

export class MobilePayRequestData extends BaseModel{
    @v.IsUrl()
    shoplogoUrl: URL;
}