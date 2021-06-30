import { CaptureTransaction } from "../captureTransaction";

export interface MobilePayPaymentCaptureRequest {
    transaction: CaptureTransaction;
}