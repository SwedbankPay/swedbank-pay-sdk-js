export interface CreditCardOptions {
  /**
   * true if debit cards should be declined;
   * otherwise false per default.
   *
   * Default value is set by Swedbank Pay and
   * can be changed at your request.
   */
  rejectDebitCards?: boolean;
  /**
   * true if credit cards should be declined;
   * otherwise false per default.
   *
   * Default value is set by Swedbank Pay and
   * can be changed at your request.
   */
  rejectCreditCards?: boolean;
  /**
   * true if consumer cards should be declined;
   * otherwise false per default.
   *
   * Default value is set by Swedbank Pay and
   * can be changed at your request.
   */
  rejectConsumerCards?: boolean;
  /**
   * true if corporate cards should be declined;
   * otherwise false per default.
   *
   * Default value is set by Swedbank Pay and
   * can be changed at your request.
   */
  rejectCorporateCards?: boolean;
  /**
   * true if 3-D Secure should be disabled for
   * this payment in the case a stored card is used;
   * otherwise false per default.
   *
   * To use this feature it has to be enabled on
   * the contract with Swedbank Pay.
   */
  no3DSecure?: boolean;
  /**
   * true if the CVC field should be disabled for this
   * payment in the case a stored card is used; otherwise
   * false per default.
   *
   * This feature is commonly used when One-Click Payments
   * is enabled. To use this feature it has to be enabled on
   * the contract with Swedbank Pay.
   */
  noCvc?: boolean;
}
