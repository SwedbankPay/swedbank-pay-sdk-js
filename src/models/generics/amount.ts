import * as v from 'class-validator';
import { BaseModel } from './base-model';

export class Amount extends BaseModel {
  @v.IsNumber()
  inLowestMonetaryUnit: number;
}
