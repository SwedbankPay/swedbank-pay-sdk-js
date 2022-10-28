
import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Amount } from '../../generics/amount';
import { GetPaymentResponse } from '../transactions/get-payment-response';

export class CardPaymentRecurResponseDetails extends GetPaymentResponse {
    @v.IsString()
    paymentToken: string;

    @v.IsString()
    recurrenceToken: string;

    @Type(() => Amount)
    @v.ValidateNested()
    remainingCaptureAmount: Amount;

    @Type(() => Amount)
    @v.ValidateNested()
    remainingCancellationAmount: Amount;
}