import * as v from 'class-validator';
import { Price } from './price';
import { BaseModel } from '../generics/baseModel';

export class GenericPaymentRequestDetails extends BaseModel {
    @v.IsString()
    description: string;
    @v.ValidateNested()
    prices: Price
}

