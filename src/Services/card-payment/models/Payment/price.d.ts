export interface Price {
  /**
   * Use the generic type CreditCard if you want to enable all card brands
   * supported by merchant contract. Use card brands like Visa (for card type Visa),
   * MasterCard (for card type MasterCard) and others if you want to specify different
   * amount for each card brand. If you want to use more than one amount you must have
   * one instance in the prices node for each card brand. You will not be allowed to
   * both specify card brands and CreditCard at the same time in this field.
   *
   * Read More: https://developer.swedbankpay.com/payments/card/other-features#prices
   */
  type:
    | 'CreditCard'
    | 'Visa'
    | 'MasterCard'
    | 'Amex'
    | 'Dankort'
    | 'Diners'
    | 'Finax'
    | 'Jcb'
    | 'IkanoFinansDK'
    | 'Maestro';
  /**
   * The amount (including VAT, if any) to charge the payer, entered in the lowest
   * monetary unit of the selected currency. E.g.: 10000 = `100.00` SEK, 5000 = `50.00` SEK.
   */
  amount: number;
  /**
   * The amount of VAT to charge the payer, entered in the lowest monetary unit of the
   * selected currency. E.g.: 10000 = `100.00` SEK, 5000 = `50.00` SEK. If the amount given
   * includes VAT, vatAmount may be displayed for the user in the payment page (redirect only).
   * Set to 0 (zero) if there is no VAT amount charged.
   */
  vatAmount: number;
}
