export interface MerchantConfig {
  /**
   * Credentials (Merchant Access Token) from Swedbank Pay retrieved from Swedbank Pay Admin.
   */
  merchantToken: string;
  /**
   * A trace identifier used to trace calls through the PayEx systems (ref RFC 7329).
   * Each request must mint a new GUID/UUID. If no Session-Id is provided, PayEx will generate one.
   */
  sessionId?: string;
  /**
   * The IP address of the consumer as well as the host and protocol of the consumer-facing
   * web page. Only the consumer IP address is required, the other parameters are optional.
   * See RFC 7239 for details.
   */
  consumerIp: string;
  /**
   * Used to run in test-mode. The requests will be sent to Payex' Test API.
   */
  testMode?: boolean;
  /**
   * Override for PayEx API. Replaces testMode to customise environment.
   */
  callbackOverride?: string;
}
