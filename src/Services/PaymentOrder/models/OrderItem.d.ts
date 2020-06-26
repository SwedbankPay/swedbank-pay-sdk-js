import { Url } from "url";

export interface OrderItem {
  reference: string;
  name: string;
  type: string;
  class: string;
  itemUrl: Url;
  imageUrl: Url;
  description: string;
  discountDescription: string;
  quantity: number;
  quantityUnit: string;
  unitPrice: number;
  discountPrice: number;
  vatPercent: number;
  amount: number;
  vatAmount: number;
}
