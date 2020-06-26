import { Url } from "url";


export interface PaymentUrls {
  /**
   * The array of URIs valid for embedding of Swedbank Pay Hosted Views.
   * This determines on what URLs the payment frame(s) can be displayed as.
   *
   * This is a whitelist.
   */
  hostUrls: Url[];
  /**
   * The URL that Swedbank Pay will redirect back to when the payer has
   * completed his or her interactions with the payment.
   *
   * This does not indicate a successful payment, only that it has reached a
   * final (complete) state.
   * A GET request needs to be performed on the payment order to inspect it
   * further.
   */
  completeUrl: Url;
  /**
   * The URI to redirect the payer to if the payment is canceled, either by the
   * payer or by the merchant (you) trough an abort request of the paymentorder.
   */
  cancelUrl?: Url;
  /**
   * The URI that Swedbank Pay will redirect back to when the payment menu needs
   * to be loaded, to inspect and act on the current status of the payment.
   */
  paymentUrl?: Url;
  /**
   * The URI to the API endpoint receiving POST requests on transaction activity
   * related to the payment order.
   *
   * URL to a open endpoint to receive POST requests from Swedbank with updates
   * on transaction activity related to payment orders.
   * The endpoint must be reachable from the internet and will receive a POST.
   * Example:
   * {
   *  paymentOrder : {
   *    id: Url;
   *    instrument: string;
   *  }
   * }
   */
  callbackUrl: Url;
  /**
   * The HTTP URI to the terms of service document the payer must accept in
   * order to complete the payment.
   * Note that this field is only required if 'generateReferenceToken' or
   * 'generateRecurrenceToken' is also submitted in the request with the value
   * true.
   * This is your TOS, not the Swedbank Pay Terms of Service.
   */
  termsOfServiceUrl?: Url;
}
