import * as v from 'class-validator';
import { BaseModel } from './base-model';

export class ProblemItem  extends BaseModel {
    @v.IsString()
    description: string;

    @v.IsString()
    name: string;
}