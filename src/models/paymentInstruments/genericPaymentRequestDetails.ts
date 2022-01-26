import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { Price } from './price';

export class GenericPaymentRequestDetails extends BaseModel {
    @v.IsString()
    description: string;
    @v.ValidateNested()
    prices: Price
}

