import { Identifiable } from "../identifiable";
import { Price } from "./price";

export interface PriceListResponse extends Identifiable {
    priceList: Price[];
}