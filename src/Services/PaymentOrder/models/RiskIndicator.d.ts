
export interface RiskIndicator {
  /**
   * For electronic delivery, the email address to which the
   * merchandise was delivered. Providing this field when
   * appropriate decreases the likelyhood of a 3-D Secure
   * authentication for the payer.
   */
  deliveryEmailAdress?: string;
  /**
   * Indicates the merchandise delivery timeframe.
   *
   * 01 (Electronic Delivery)
   * 02 (Same day shipping)
   * 03 (Overnight shipping)
   * 04 (Two-day or more shipping)
   */
  deliveryTimeFrameIndicator?: '01' | '02' | '03' | '04';
  /**
   * For a pre-ordered purchase. The expected date that the
   * merchandise will be available.
   *
   * Format: YYYYMMDD
   */
  preOrderDate?: string;
  /**
   * Indicates whether the payer is placing an order for
   * merchandise with a future availability or release date.
   *
   * 01 (Merchandise available)
   * 02 (Future availability)
   */
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
  shipIndicator?: '01' | '02' | '03' | '04' | '05' | '06' | '07';
  /**
   * true if this is a purchase of a gift card.
   */
  giftCardPurchase?: boolean;
  /**
   * Indicates whether the payer is placing an order for merchandise
   * with a future availability or release date.
   *
   * 01 (Merchandise available)
   * 02 (Future availability)
   */
  reOrderPurchaseIndicator?: '01' | '02';

  pickUpAddress?: {
    name: string;
    streetAddress: string;
    coAddress?: string;
    city: string;
    zipCode: string;
    countryCode: string;
  };
}
