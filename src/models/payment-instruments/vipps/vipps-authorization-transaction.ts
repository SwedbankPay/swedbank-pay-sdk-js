import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class VippsAuthorizationTransaction extends BaseModel {
  @v.IsString()
  msisdn: string;
}
