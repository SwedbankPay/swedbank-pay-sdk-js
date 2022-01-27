import { CaptureTransaction } from "../transactions/captureTransaction";

export interface VippsPaymentCaptureRequest {
    transaction: CaptureTransaction;
}