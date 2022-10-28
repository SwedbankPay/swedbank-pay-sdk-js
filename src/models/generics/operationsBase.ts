import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from './baseModel';
import { HttpOperation } from './httpOperation';
import { LinkRelation } from '../enums/linkRelation';

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