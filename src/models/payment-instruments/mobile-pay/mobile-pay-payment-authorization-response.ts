import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { TransactionResponse } from '../transactions/transaction-response';
import { MobilePayPaymentAuthorization } from './mobile-pay-payment-authorization';

export class MobilePayPaymentAuthorizationResponse extends TransactionResponse{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorization: MobilePayPaymentAuthorization;
}