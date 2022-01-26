import * as v from 'class-validator';
import { BaseModel } from './generics/baseModel';

export class ProblemItem  extends BaseModel {
    @v.IsString()
    description: string;

    @v.IsString()
    name: string;
}