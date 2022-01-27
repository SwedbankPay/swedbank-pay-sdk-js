import * as v from 'class-validator'
import { Type } from 'class-transformer'
import { BaseModel } from "../generics/baseModel";
import { Msisdn } from "../msisdn";

export class PrefillInfo extends BaseModel{
    @Type(()=> Msisdn)
    @v.ValidateNested()
    msisdn: Msisdn;
}