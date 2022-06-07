import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';

export class TrustlyPrefillInfo extends BaseModel {
    @v.IsString()
    firstName: string;
    
    @v.IsString()
    lastName: string;
}