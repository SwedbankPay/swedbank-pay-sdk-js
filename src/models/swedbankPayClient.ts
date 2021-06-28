import { ConsumersResource } from "./consumers/consumersResource";
import { PaymentInstrumentsResource } from "./paymentInstruments/paymentInstrumentsResource";
import { PaymentOrdersResource } from "./paymentOrders/paymentOrderResource";

export interface SwedbankPayClient {
    paymentOrders: PaymentOrdersResource;
    consumers: ConsumersResource;
    payments: PaymentInstrumentsResource;
}