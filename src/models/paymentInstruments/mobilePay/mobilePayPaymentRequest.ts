import { MobilePayPaymentDetails } from "./mobilePayPaymentDetails";
import { MobilePayRequestData } from "./mobilePayRequestData";

export interface MobilePayPaymentRequest {
    payment: MobilePayPaymentDetails;
    mobilePay: MobilePayRequestData;
}