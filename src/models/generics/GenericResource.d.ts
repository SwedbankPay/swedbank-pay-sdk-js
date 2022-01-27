import * as v from 'class-validator';
import { BaseModel } from './baseModel';
export class GenericResource extends BaseModel{
    @v.IsString()
    id: string;
}
  