export interface PaymentInstrumentsResource {
    cardPayments: CardResource;
    swishPayments: SwishResource;
    invoicePayments: InvoiceResource;
    vippsPayments: VippsResource;
    mobilePayPayments: MobilePayResource;
    trustlyPayments: TrustlyResource;
}