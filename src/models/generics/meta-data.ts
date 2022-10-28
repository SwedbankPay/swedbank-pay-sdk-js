import * as v from 'class-validator';
import { BaseModel } from './base-model';

export class MetaData extends BaseModel {
  @v.IsString()
  id: string;
}
