import { Url } from "url";
import * as v from 'class-validator';
import { BaseModel } from "../../../models/generics/baseModel";

declare enum OrderItemType {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
  SHIPPING_FEE = "SHIPPING_FEE",
  PAYMENT_FEE = "PAYMENT_FEE",
  VALUE_CODE = "VALUE_CODE",
  OTHER = "OTHER"
}

export class OrderItem extends BaseModel {
  /**
   * A reference that identifies the order item.
   * This is a reference in your system.
   * Max lenght of 50 characters
   */
   @v.IsString()
   reference?: string;
  /**
   * The name of the order item.
   */
   @v.IsString()
   name: string;
  /**
   * The type of the order item. PAYMENT_FEE is the amount you are charged with
   * when you are paying with invoice.
   * The amount can be defined in the amount field.
   */
  @v.IsEnum(OrderItemType)
  type: OrderItemType;
  /**
   * The classification of the order item.
   * Can be used for assigning the order item to a specific product category,
   * such as MobilePhone.
   * Note that class cannot contain spaces and must follow the regex
   * pattern [\w]* (a-zA-Z0-9_).
   * Swedbank Pay may use this field for statistics.
   */
  @v.IsString()
  class: string;
  /**
   * The URL to a page that can display the purchased item, product or similar.
   */
   @v.IsUrl()
  itemUrl?: Url;
  /**
   * The URL to an image of the order item.
   */
   @v.IsUrl()
   imageUrl?: Url;
  /**
   * A textual description of this item.
   * Max 40 characters.
   */
  @v.IsString()
  description?: string;
  /**
   * A human readable description of the possible discount.
   */
  @v.IsString()
  discountDescription?: string;
  /**
   * The 4 decimal precision quantity of orderItem being purchased.
   */
   @v.IsNumber()
   quantity: number;
  /**
   * The unit of the quantity, such as pcs, grams, or similar.
   * This is a free-text field and is used for your own book keeping.
   */
  @v.IsString()
  quantityUnit: string;
  /**
   * The price per unit of order item, including VAT.
   */
  @v.IsNumber()
  unitPrice: number;
  /**
   * If the order item is purchased at a discounted price this field should
   * contain that price, including VAT.
   */
  @v.IsNumber()
  discountPrice?: number;
  /**
   * The amount (including VAT, if any) to charge the payer, entered in the 
   * lowest monetary unit of the selected currency.
   * E.g.: 10000 = 100.00 EUR.
   */
  @v.IsNumber()
  vatAmount: number;
  /**
   * The amount (including VAT, if any) to charge the payer, entered in the
   * lowest monetary unit of the selected currency.
   * E.g.: 10000 = 100.00 EUR
   */
  @v.IsNumber()
  amount: number;
  /**
   * The percent value of the VAT multiplied by 100, so 25% becomes 2500.
   */
  @v.IsNumber()
  vatPercent: number;
}