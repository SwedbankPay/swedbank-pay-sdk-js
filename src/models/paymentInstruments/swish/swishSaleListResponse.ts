import { Identifiable } from "../../identifiable";
import { SwishSaleListItem } from "./swishSaleListItem";

export interface SwishSaleListResponse extends Identifiable {
    saleList: SwishSaleListItem[];
}