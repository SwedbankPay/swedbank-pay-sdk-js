import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../../models/generics/base-model';
import { Address } from './Address';

export class RiskIndicator extends BaseModel {
  /**
   * For electronic delivery, the email address to which the
   * merchandise was delivered. Providing this field when
   * appropriate decreases the likelyhood of a 3-D Secure
   * authentication for the payer.
   */
  @v.IsString()
  deliveryEmailAdress?: string;
  /**
   * Indicates the merchandise delivery timeframe.
   *
   * 01 (Electronic Delivery)
   * 02 (Same day shipping)
   * 03 (Overnight shipping)
   * 04 (Two-day or more shipping)
   */
  @v.IsString()
  @v.Matches(0[1-4])
  deliveryTimeFrameIndicator?: '01' | '02' | '03' | '04';
  /**
   * For a pre-ordered purchase. The expected date that the
   * merchandise will be available.
   *
   * Format: YYYYMMDD
   */
  @v.IsString()
  @v.Matches(/^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/)
  preOrderDate?: string;
  /**
   * Indicates whether the payer is placing an order for
   * merchandise with a future availability or release date.
   *
   * 01 (Merchandise available)
   * 02 (Future availability)
   */
  @v.IsString()
  @v.Matches(0[1-2])
  preOrderPurchaseIndicator?: '01' | '02';
  /**
   * Indicates shipping method chosen for the transaction.
   *
   * 01 (Ship to cardholder’s billing address)
   * 02 (Ship to another verified address on file with merchant)
   * 03 (Ship to address that is different than cardholder’s billing address)
   * 04 (Ship to Store / Pick-up at local store. Store address shall be populated in shipping address fields)
   * 05 (Digital goods, includes online services, electronic giftcards and redemption codes)
   * 06 (Travel and Event tickets, not shipped)
   * 07 (Other, e.g. gaming, digital service)
   */
  @v.IsString()
  @v.Matches(0[1-7])
  shipIndicator?: '01' | '02' | '03' | '04' | '05' | '06' | '07';
  /**
   * true if this is a purchase of a gift card.
   */
  @v.IsBoolean()
  giftCardPurchase?: boolean;
  /**
   * Indicates whether the payer is placing an order for merchandise
   * with a future availability or release date.
   *
   * 01 (Merchandise available)
   * 02 (Future availability)
   */
  @v.IsString()
  @v.Matches(0[1-2])
  reOrderPurchaseIndicator?: '01' | '02';
  /**
   * If shipIndicator is set to 04, then prefill this with the payers
   * pickUpAddress of the purchase to decrease the risk factor of the purchase.
   */
  @v.ValidateNested()
  @Type(() => Address)
  pickUpAddress?: Address;
}