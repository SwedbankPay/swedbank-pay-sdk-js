import { ProblemItem } from './problemItem';
import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from './baseModel';

export class Problem extends BaseModel {
    @v.IsString()
    action: string;

    @v.IsString()
    detail: string;

    @v.IsString()
    instance: string;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => ProblemItem)
    problems: ProblemItem[];

    @v.IsNumber()
    status: number;

    @v.IsString()
    title: string;

    @v.IsString()
    type: string;
}