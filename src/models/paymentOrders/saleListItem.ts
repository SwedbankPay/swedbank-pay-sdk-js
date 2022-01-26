import { Amount } from "../amount";
import { PaymentType } from "../paymentInstruments/paymentType";
import { State } from "../enums/state";

export interface SaleListItem {
    id: URL;
    created: string;
    updated: string;
    type: PaymentType;
    state: State;
    number: number;
    amount: Amount;
    vatAmount: Amount;
    description: string;
    payeeReference: string;
}