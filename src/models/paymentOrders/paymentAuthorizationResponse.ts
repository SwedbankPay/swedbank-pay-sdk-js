import { Amount } from "../generics/amount";
import { Identifiable } from "../identifiable";
import { PaymentType } from "../paymentInstruments/paymentType";
import { State } from "../enums/state";

export interface PaymentAuthorizationResponse extends Identifiable {
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