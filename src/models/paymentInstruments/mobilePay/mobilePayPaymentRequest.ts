import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { MobilePayPaymentDetails } from './mobilePayPaymentDetails';
import { MobilePayRequestData } from './mobilePayRequestData';

export class MobilePayPaymentRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentDetails)
    payment: MobilePayPaymentDetails;

    @v.ValidateNested()
    @Type(() => MobilePayRequestData)
    mobilePay: MobilePayRequestData;
}