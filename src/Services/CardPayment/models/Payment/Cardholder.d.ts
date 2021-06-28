export interface CardholderAddress {
  firstName?: string;
  lastName?: string;
  email?: string;
  msisdn?: string;
  streetAddress?: string;
  coAddress?: string;
  city?: string;
  zipCode?: string;
  countryCode?: string;
}

export interface CardholderAccountInfo {
  /**
   * Indicates the length of time that the payments account was enrolled in the
   * cardholder’s account with merchant.
   *
   * 01 (No account, guest)
   * 02 (Created dURLng transaction)
   * 03 (Less than 30 days)
   * 04 (30-60 days)
   * 05 (More than 60 days)
   */
  accountAgeIndicator?: '01' | '02' | '03' | '04' | '05';
  /**
   * Length of time since the cardholder’s account information with the merchant
   * was changed. Including billing etc.
   *
   * 01 (Changed dURLng transaction)
   * 02 (Less than 30 days)
   * 03 (30-60 days)
   * 04 (More than 60 days)
   */
  accountChangeIndicator?: '01' | '02' | '03' | '04';
  /**
   * Indicates the length of time since the cardholder’s account with the merchant
   * had a password change or account reset.
   *
   * 01 (No change)
   * 02 (Changed dURLng transaction)
   * 03 (Less than 30 days)
   * 04 (30-60 days)
   * 05 (More than 60 days)
   */
  accountPwdChangeIndicator?: '01' | '02' | '03' | '04' | '05';
  /**
   * Indicates when the shipping address used for this transaction was first used
   * with the merchant.
   *
   * 01 (This transaction)
   * 02 (Less than 30 days)
   * 03 (30-60 days)
   * 04 (More than 60 days)
   */
  shippingAddressUsageIndicator?: '01' | '02' | '03' | '04';
  /**
   * Indicates if the Cardholder Name on the account is identical to the shipping
   * Name used for this transaction.
   *
   * 01 (Account name identical to shipping name)
   * 02 (Account name different than shipping name)
   */
  shippingNameIndicator?: '01' | '02';
  /**
   * Indicates whether merchant has experienced suspicious activity (including previous
   * fraud) on the cardholder account.
   *
   * 01 (No suspicious activity has been observed)
   * 02 (Suspicious activity has been observed)
   */
  suspiciousAccountActivity?: '01' | '02';
  /**
   * Allows the 3-D Secure Requestor to indicate to the ACS whether
   * the cardholder’s billing and shipping address are the same.
   */
  addressMatchIndicator?: boolean;
}

export interface Cardholder {
  /**
   * If buyer is a company, use only firstName.
   */
  firstName?: string;
  /**
   * If buyer is a company, use only firstName.
   */
  lastName?: string;
  email?: string;
  msisdn?: string;
  homePhoneNumber?: string;
  workPhoneNumber?: string;
  shippingAddress?: CardholderAddress;
  billingAddress?: CardholderAddress;
  /**
   * If cardholder is known by merchant and have
   * some kind of registered user then these fields can be set.
   */
  accountInfo?: CardholderAccountInfo;
}
