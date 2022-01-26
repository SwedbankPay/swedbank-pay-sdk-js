import * as v from 'class-validator';
import { BaseModel } from './baseModel';

export class MetaData extends BaseModel {
    @v.IsString()
    id: string;
}