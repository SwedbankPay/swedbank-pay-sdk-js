import { CaptureTransaction } from "../captureTransaction";

export interface InvoicePaymentCaptureRequest {
    transaction: CaptureTransaction;
}