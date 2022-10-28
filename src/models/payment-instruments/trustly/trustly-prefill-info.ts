import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class TrustlyPrefillInfo extends BaseModel {
    @v.IsString()
    firstName: string;
    
    @v.IsString()
    lastName: string;
}