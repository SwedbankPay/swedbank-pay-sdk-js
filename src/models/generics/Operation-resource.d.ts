import { Methods } from '../enums/methods';
import * as v from 'class-validator';
import { BaseModel } from './baseModel';

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