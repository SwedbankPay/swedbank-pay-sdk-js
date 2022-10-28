import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { PaymentOrderUpdateRequestDetails } from './paymentOrderUpdateRequestDetails';

export class PaymentOrderUpdateRequest extends BaseModel {

    @v.ValidateNested()
    @Type(() => PaymentOrderUpdateRequestDetails)
    paymentOrder: PaymentOrderUpdateRequestDetails;
}