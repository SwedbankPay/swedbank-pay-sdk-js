import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { LinkRelation } from '../enums/link-relation';
import { BaseModel } from './base-model';
import { HttpOperation } from './http-operation';

export class OperationsBase extends BaseModel {
  @v.IsArray()
  @v.IsEnum(LinkRelation)
  keys: LinkRelation[];

  @v.IsArray()
  @v.ValidateNested()
  @Type(() => HttpOperation)
  values: HttpOperation[];

  @v.IsNumber()
  count: number;

  @v.IsBoolean()
  isReadOnly: boolean;
}
