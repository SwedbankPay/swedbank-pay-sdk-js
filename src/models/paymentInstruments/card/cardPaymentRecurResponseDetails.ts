import { Amount } from "../../generics/amount";
import { GetPaymentResponse } from "../transactions/getPaymentResponse";

export class CardPaymentRecurResponseDetails extends GetPaymentResponse {
    paymentToken: string;
    recurrenceToken: string;
    remainingCaptureAmount: Amount;
    remainingCancellationAmount: Amount;
}