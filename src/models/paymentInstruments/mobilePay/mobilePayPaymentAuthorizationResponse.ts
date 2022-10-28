import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { TransactionResponse } from '../transactions/transactionResponse';
import { MobilePayPaymentAuthorization } from './mobilePayPaymentAuthorization';

export class MobilePayPaymentAuthorizationResponse extends TransactionResponse{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorization: MobilePayPaymentAuthorization;
}