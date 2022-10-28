import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { MobilePayPaymentDetails } from './mobile-pay-payment-details';
import { MobilePayRequestData } from './mobile-pay-request-data';

export class MobilePayPaymentRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentDetails)
    payment: MobilePayPaymentDetails;

    @v.ValidateNested()
    @Type(() => MobilePayRequestData)
    mobilePay: MobilePayRequestData;
}