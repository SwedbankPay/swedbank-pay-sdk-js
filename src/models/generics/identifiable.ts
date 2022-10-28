import * as v from 'class-validator';
import { BaseModel } from './base-model';

export class Identifiable extends BaseModel {
    @v.IsUrl()
    id: URL;
}