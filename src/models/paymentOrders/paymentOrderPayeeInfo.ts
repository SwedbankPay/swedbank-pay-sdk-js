import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";

export interface PaymentOrderPayeeInfo extends PayeeInfo {
    corporationId: string;
    corporationName: string;
}