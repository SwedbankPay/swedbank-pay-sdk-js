import { Cardholder } from './Payment/card-holder';
import { CreditCardOptions } from './Payment/credit-card-options';
import { Payee } from './Payment/payee';
import { PickupAddress } from './Payment/pickup-address';
import { Price } from './Payment/price';
import { RiskIndicator } from './Payment/risk-indicator';
import { Urls } from './Payment/urls';

export interface PaymentRequest {
  payment: PaymentRequestResource;
}

export interface PaymentRequestResource {
  /**
   * Determines the initial operation, that defines the type card payment created.
   *
   * `Purchase`
   * Used to charge a card. It is followed up by a capture or cancel operation.
   *
   * `Recur`
   * Used to charge a card on a recurring basis. Is followed up by a capture or
   * cancel operation (if not Autocapture is used, that is).
   *
   * `Payout`
   * Used to deposit funds directly to credit card. No more requests are necessary
   * from the merchant side.
   *
   * `Verify`
   * Used when authorizing a card withouth reserveing any funds. It is followed up
   * by a verification transaction.
   */
  operation: 'Purchase' | 'Recur' | 'Payout' | 'Verify';
  /**
   * The intent of the payment identifies how and when the charge will be effectuated.
   * This determine the type transactions used during the payment process.
   *
   * `Authorization`: Reserves the amount, and is followed by a cancellation or capture
   * of funds.
   *
   * `AutoCapture`: A one phase-option that enable capture of funds automatically
   * after authorization.
   */
  intent: 'Authorization' | 'AutoCapture';
  /**
   * The paymentToken value received in GET response towards the Payment Resource is the
   * same paymentToken generated in the initial purchase request. The token allow you to
   * use already stored card data to initiate one-click payments.
   */
  paymentToken?: string;
  /**
   * The currency of the operation
   */
  currency: 'NOK' | 'SEK' | 'DKK' | 'USD' | 'EUR';
  /**
   * The prices resource lists the prices related to a specific payment.
   */
  prices?: Price[] | null;
  /**
   * A textual description max 40 characters of the purchase.
   */
  description: string;
  /**
   * The reference to the payer (consumer/end user) from the merchant system.
   * E.g mobile number, customer number etc.
   */
  payerReference?: string;
  /**
   * true or false. Set this to true if you want to create a paymentToken
   * for future use as One Click.
   */
  generatePaymentToken?: boolean;
  /**
   * true or false. Set this to true if you want to create a recurrenceToken
   * for future use Recurring purchases (subscription payments).
   */
  generateRecurrenceToken?: boolean;
  /**
   * The user agent reference of the consumer’s browser.
   *
   * Read More: https://en.wikipedia.org/wiki/User_agent
   */
  userAgent: string;
  /**
   * Display language
   */
  language: 'nb-NO' | 'sv-SE' | 'en-US';
  /**
   * The object containing URLs relevant for the payment.
   */
  urls: Urls;
  /**
   * The payeeInfo object, containing information about
   * the payee (the recipient of the money).
   */
  payeeInfo: Payee;
  /**
   * The keys and values that should be associated with
   * the payment. Can be additional identifiers and data
   * you want to associate with the payment.
   */
  metadata?: { [T: string]: string | boolean | number };
  /**
   * Cardholder object that can hold information
   * about a buyer (private or company). The information added
   * increases the chance for frictionless flow.
   */
  cardHolder?: Cardholder;
  /**
   * This optional object consist of information that helps verifying
   * the payer. Providing these fields decreases the likelyhood of having
   * to promt for 3-D Secure authenticaiton of the payer when they are
   * authenticating the purchacse.
   */
  riskIndicator?: RiskIndicator;
  /**
   * If shipIndicator set to 04, then prefill this with the payers
   * pickUpAddress of the purchase to decrease the risk factor of the
   * purchase.
   */
  pickUpAddress?: PickupAddress;
  creditCard?: CreditCardOptions;
}
