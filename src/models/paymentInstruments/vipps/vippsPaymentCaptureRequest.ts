import { CaptureTransaction } from "../captureTransaction";

export interface VippsPaymentCaptureRequest {
    transaction: CaptureTransaction;
}