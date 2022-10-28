import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class MobilePayRequestData extends BaseModel{
    @v.IsUrl()
    shoplogoUrl: URL;
}