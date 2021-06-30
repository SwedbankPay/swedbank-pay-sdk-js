import { Amount } from "../amount";
import { PriceType } from "../priceType";

export interface Price {
    amount: Amount;
    type: PriceType;
    vatAmount: Amount;
}