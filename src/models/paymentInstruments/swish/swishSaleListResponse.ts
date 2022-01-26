import { Identifiable } from "../../generics/identifiable";
import { SwishSaleListItem } from "./swishSaleListItem";

export interface SwishSaleListResponse extends Identifiable {
    saleList: SwishSaleListItem[];
}