import { Identifiable } from "../../generics/identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { SwishSaleListResponse } from "./swishSaleListResponse";

export interface SwishPayment extends Identifiable, PaymentInstrument {
    sales: SwishSaleListResponse;
}