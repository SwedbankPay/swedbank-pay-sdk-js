import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { TransactionResponse } from "../transactions/transactionResponse";
import { MobilePayPaymentAuthorization } from "./mobilePayPaymentAuthorization";

export class MobilePayPaymentAuthorizationResponse extends TransactionResponse{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorization: MobilePayPaymentAuthorization;
}