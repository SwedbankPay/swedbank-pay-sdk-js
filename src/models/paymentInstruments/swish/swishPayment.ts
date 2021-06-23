export interface SwishPayment extends Identifiable, PaymentInstrument {
    sales: SwishSaleListResponse;
}