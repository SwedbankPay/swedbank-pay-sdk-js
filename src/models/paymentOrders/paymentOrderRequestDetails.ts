import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";
import { RiskIndicator } from "../../Services/PaymentOrder/models/RiskIndicator";
import { Amount } from "../generics/amount";
import { Currency } from "../currency";
import { Language } from "../language";
import { MetaData } from "../generics/MetaData-resource";
import { Operation } from "../enums/operation";
import { Urls } from "../urls";
import { Payer } from "./payer";
import { PaymentOrderPaymentOptionsItems } from "./paymentOrderPaymentOptionsItems";

export interface PaymentOrderRequestDetails {
    amount: Amount;
    currency: Currency;
    description: string;
    generateRecurrenceToken: boolean;
    items: PaymentOrderPaymentOptionsItems[];
    language: Language;
    metadata: MetaData;
    operation: Operation;
    orderItems: OrderItem[];
    payeeInfo: PayeeInfo;
    payer: Payer;
    riskIndicator: RiskIndicator;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
    disablePaymentMenu: boolean | null;
}