import { CaptureTransaction } from "../transactions/captureTransaction";

export interface InvoicePaymentCaptureRequest {
    transaction: CaptureTransaction;
}