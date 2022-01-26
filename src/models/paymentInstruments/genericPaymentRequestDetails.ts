import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Type } from 'class-transformer';
import { Price } from './price';

export class GenericPaymentRequestDetails extends BaseModel {
    @v.IsString()
    description: string;

    @v.ValidateNested()
    @v.IsArray()
    @Type(() => Price)
    prices: Price[]
}