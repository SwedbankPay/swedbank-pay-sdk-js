import * as v from 'class-validator';
import { BaseModel } from './base-model';
export class GenericResource extends BaseModel{
    @v.IsString()
    id: string;
}
  