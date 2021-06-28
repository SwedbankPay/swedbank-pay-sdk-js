import { SaleListItem } from "./saleListItem";

export interface SaleListResponse {
    id: URL;
    saleList: SaleListItem[];
}