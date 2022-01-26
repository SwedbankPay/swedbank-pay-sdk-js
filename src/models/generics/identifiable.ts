import * as v from 'class-validator';
import { BaseModel } from './baseModel';

export class Identifiable extends BaseModel {
    @v.IsUrl()
    id: URL;
}