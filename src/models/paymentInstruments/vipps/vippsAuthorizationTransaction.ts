import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';

export class VippsAuthorizationTransaction extends BaseModel {
    @v.IsString()
    msisdn: string;
}