export interface PayeeInfo {
  /**
   * The payeeId, this is usually the Merchant ID (you). Found by accessing
   * the Admin Portal.
   */
  payeeId: string;
  /**
   * A operation unique reference for your system. It is set per operation
   * to ensure an exactly-once delivery of a transactional operation.
   * Must conform to the regex ^[A-Za-z0-9]{1,12}
   */
  payeeReference: string;
  /**
   * Used to display the name of the payee/merchant in the payment frame.
   */
  payeeName?: string;
  /**
   * A product category or number sent in from the payee.
   * This is not validated by Swedbank Pay other than checking for max length of
   * 50, but will be passed through the
   * payment process and may be used in the settlement process.
   */
  productCategory?: string;
  /**
   * The order reference should reflect the order reference found your systems.
   * Can be used to track an order in your system.
   * Max length of 50 characters.
   */
  orderReference?: string;
  /**
   * The subsite field can be used to perform split settlement on the payment.
   * The subsites must be resolved with Swedbank Pay reconciliation
   * before being used.
   * Max length of 40 characters.
   * Read more: https://developer.swedbankpay.com/payments/card/other-features#split-settlement
   */
  subsite?: string;
}
