export interface Urls {
  /**
   * The array of URLs valid for embedding of Swedbank Pay Hosted Views.
   * If not supplied, view-operation will not be available.
   */
  hostUrls?: string[];

  /**
   * The URL that Swedbank Pay will redirect back to when the payer has
   * completed his or her interactions with the payment. This does not
   * indicate a successful payment, only that it has reached a final
   * (complete) state. A GET request needs to be performed on the payment
   * to inspect it further.
   */
  completeUrl: string;

  /**
   * The URL to redirect the payer to if the payment is canceled. Only used in
   * redirect scenarios. Can not be used simultaneously with paymentUrl; only
   * cancelUrl or paymentUrl can be used, not both.
   */
  cancelUrl: string;

  /**
   * The URL that Swedbank Pay will redirect back to when the view-operation
   * needs to be loaded, to inspect and act on the current status of the payment.
   * Only used in Seamless Views. If both cancelUrl and paymentUrl is sent, the
   * paymentUrl will used.
   */
  paymentUrl?: string;

  /**
   * The URL that Swedbank Pay will perform an HTTP POST against every time a
   * transaction is created on the payment. See
   * [callback](https://developer.swedbankpay.com/payments/card/other-features#callback)
   * for details.
   */
  callbackUrl: string;

  /**
   * The URL that will be used for showing the customer logo. Must be a picture with
   * maximum 50px height and 400px width. Require https.
   */
  logoUrl?: string;

  /**
   * A URL that contains your terms and conditions for the payment, to be linked on
   * the payment page. Require https.
   */
  termsOfServiceUrl: string;
}
