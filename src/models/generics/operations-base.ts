import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { LinkRelation } from '../enums/linkRelation';
import { BaseModel } from './base-model';
import { HttpOperation } from './http-operation';

export default class OperationsBase extends BaseModel {
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