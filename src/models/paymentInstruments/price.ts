import { Amount } from "../amount";
import { PriceType } from "../enums/priceType";

export interface Price {
    amount: Amount;
    type: PriceType;
    vatAmount: Amount;
}