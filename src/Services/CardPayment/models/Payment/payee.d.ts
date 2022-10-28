export interface Payee {
  /**
   * This is the unique id that identifies this payee (like merchant) set by Swedbank Pay.
   */
  payeeId?: string;
  /**
   * A unique reference from the merchant system. It is set per operation to ensure an
   * exactly-once delivery of a transactional operation.
   *
   * Read more: https://developer.swedbankpay.com/payments/card/other-features#payee-reference
   */
  payeeReference: string;
  /**
   * The payee name (like merchant name) that will be displayed to consumer
   * when redirected to Swedbank Pay.
   */
  payeeName?: string;
  /**
   * A product category or number sent in from the payee/merchant. This is not
   * validated by Swedbank Pay, but will be passed through the payment process
   * and may be used in the settlement process.
   */
  productCategory?: string;
  /**
   * The order reference should reflect the order reference found in
   * the merchant's systems.
   */
  orderReference?: string;
  /**
   * The subsite field can be used to perform split settlement on the payment.
   * The subsites must be resolved with Swedbank Pay reconciliation before being used.
   *
   * Read more: https://developer.swedbankpay.com/payments/card/other-features#split-settlement
   */
  subsite?: string;
}
