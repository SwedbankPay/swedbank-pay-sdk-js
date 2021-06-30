import { Identifiable } from "../../identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { SwishSaleListResponse } from "./swishSaleListResponse";

export interface SwishPayment extends Identifiable, PaymentInstrument {
    sales: SwishSaleListResponse;
}