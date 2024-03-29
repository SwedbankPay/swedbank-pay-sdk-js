import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from './base-model';
import { ProblemItem } from './problem-item';

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
