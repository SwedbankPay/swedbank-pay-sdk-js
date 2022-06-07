export enum PaymentOrderExpand {
    None = 0,
    Urls = 1,
    PayeeInfo = 2,
    Settings = 4,
    Payers = 8,
    OrderItems = 16,
    Metadata = 32,
    Payments = 64,
    CurrentPayment = 128,
    All = 255
}