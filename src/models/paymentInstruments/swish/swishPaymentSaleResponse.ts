import { SwishPaymentSale } from "./swishPaymentSale";

export interface SwishPaymentSaleResponse {
    payment: URL;
    sale: SwishPaymentSale;
}