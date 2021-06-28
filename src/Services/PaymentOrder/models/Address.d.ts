export interface Address {
  /**
   * The name of the adressee.
   */
  name?: string;
  /**
   * The street address of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  streetAddress?: string;
  /**
   * The coAddress of the addressee if there is one.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  coAddress?: string;
  /**
   * The city of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  city?: string;
  /**
   * The ZIP code of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  zipCode?: string;
  /**
   * The country code of the addressee.
   * Setting this will provide pre-fill information and decrease the risk
   * factor of the purchase.
   */
  countryCode?: string;
}
