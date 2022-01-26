import * as v from 'class-validator';
import { BaseModel } from './generics/baseModel';

export class Amount extends BaseModel {
    @v.IsNumber()
    inLowestMonetaryUnit: number;
}