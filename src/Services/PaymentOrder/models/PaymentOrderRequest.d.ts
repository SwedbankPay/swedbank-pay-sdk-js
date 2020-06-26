import { RiskIndicator } from "./RiskIndicator";
import { OrderItem } from "./OrderItem";
import { PaymentUrls } from "./PaymentUrls";
import { PayeeInfo } from "./PayeeInfo";
import { PayerInfo } from "./PayerInfo";

export interface PaymentOrderRequest {
  paymentorder: PaymentOrderRequestResource
}


export interface PaymentOrderRequestResource {
  /**
   * Determines the initial operation, that defines the type card payment
   * created.
   *
   * `Purchase`
   * Used to charge a card. It is followed up by a capture or cancel operation.
   *
   * `Recur`
   * Used to charge a card on a recurring basis. Is followed up by a capture or
   * cancel operation (if not Autocapture is used, that is).
   *
   * `Verify`
   * Used when authorizing a card withouth reserveing any funds. It is
   * followed up by a verification transaction.
   */
  operation: 'Purchase' | 'Recur' | 'Verify';
  /**
   * The intent of the payment identifies how and when the charge will be 
   * effectuated.
   * This determine the type transactions used during the payment process.
   *
   * `Authorization`: Reserves the amount, and is followed by a cancellation or
   * capture of funds.
   *
   * `AutoCapture`: A one phase-option that enable capture of funds
   * automatically after authorization.
   */
  currency: 'NOK' | 'SEK' | 'DKK' | 'USD' | 'EUR';
  /**
   * The amount (including VAT, if any) to charge the payer, 
   * entered in the lowest monetary unit of the selected currency.
   * 
   * E.g.: 10000 = 100.00 EUR.
   */
  amount: number;
  /**
   * The amount of VAT to charge the payer, entered in the lowest monetary
   * unit ofthe selected currency.
   * E.g.: 10000 = 100.00 EUR
   * 
   * If the amount given includes VAT, vatAmount may be displayed for the user
   * in the payment page.
   * Set to 0 (zero) if there is no VAT amount charged.
   */
  vatAmount: number;
  /**
   * The human readable description of this order.
   */
  description: string;
  /**
   * The user agent of the payer.
   */
  userAgent: string;
  /**
   * Display language for the payment frames.
   */
  language: 'nb-NO' | 'sv-SE' | 'en-US';
  /**
   * true or false. Set this to true if you want to create a recurrenceToken
   * for future use Recurring purchases (subscription payments).
   */
  generateRecurrenceToken: boolean;
  /**
   * 'CreditCard', 'Invoice-PayExFinancingNo', 'Invoice-PayExFinancingSe',
   * 'Invoice-PayMonthlyInvoiceSe','Vipps', 'Swish' and/or 'CreditAccount'.
   * 
   * Limits the options available to the consumer in the payment menu.
   * Default value is all supported payment instruments.
   * Usage of this field requires an agreement with Swedbank Pay.
   */
  restrictedToInstruments?: string[];
  /**
   * Object containing the URLS relevant for this payment order.
   */
  urls: PaymentUrls;
  /**
   * Information about the payee.
   * That's you!
   */
  payeeInfo: PayeeInfo;
  /**
   * Object containing information about the payer of this paymentorder.
   */
  payer?: PayerInfo;
  /**
   * The array of items being purchased with the order.
   * Used to print on invoices if the payer chooses to pay with invoice,
   * among other things.
   */
  orderItems: OrderItem[];
  /**
   * This optional object consist of information that helps verifying
   * the payer. Providing these fields decreases the likelyhood of having
   * to promt for 3-D Secure authenticaiton of the payer when they are
   * authenticating the purchacse.
   */
  riskIndicator?: RiskIndicator;
}

