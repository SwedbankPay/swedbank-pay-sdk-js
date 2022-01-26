import { Method } from 'got';
import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from './baseModel';

export class Operation extends BaseModel {
  @v.IsString()
  rel: string;

  @v.IsString()
  href: string;
  
  // TODO: find how to set type is method
  method: Method;

  @v.IsString()
  contenType: string;
}
