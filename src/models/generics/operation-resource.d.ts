import * as v from 'class-validator';
import { Methods } from '../enums/methods';
import { BaseModel } from './base-model';

export class Operation extends BaseModel {
  @v.IsString()
  rel: string;

  @v.IsString()
  href: string;

  @v.IsEnum(Methods)
  method: Methods;

  @v.IsString()
  contenType: string;
}
