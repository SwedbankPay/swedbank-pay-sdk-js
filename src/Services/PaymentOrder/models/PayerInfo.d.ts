

export interface PayerInfo {
  /**
   * The consumer profile reference as obtained through initiating a
   * consumer session.
   */
  consumerProfileRef?: string;
  /**
   * The e-mail address of the payer. Will be used to prefill the Checkin as
   * well as on the payer’s profile, if not already set.
   */
  email?: string;
  /**
   * The mobile phone number of the Payer.
   * Will be prefilled on Checkin page and used on the payer’s profile,
   * if not already set.
   * The mobile number must have a country code prefix and be 8 to 15 digits
   * in length.
   */
  msisdn?: string;
  /**
   * The work phone number of the payer.
   * Optional (increased chance for frictionless flow if set)
   */
  workPhoneNumber?: string;
  /**
   * The home phone number of the payer.
   * Optional (increased chance for frictionless flow if set)
   */
  homePhoneNumber?: string;
}
