import * as v from 'class-validator';
import { BaseModel } from './baseModel';

export class Amount extends BaseModel {
    @v.IsNumber()
    inLowestMonetaryUnit: number;
}