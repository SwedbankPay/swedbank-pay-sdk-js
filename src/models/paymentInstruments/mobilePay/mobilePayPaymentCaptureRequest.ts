import { CaptureTransaction } from "../transactions/captureTransaction";

export interface MobilePayPaymentCaptureRequest {
    transaction: CaptureTransaction;
}