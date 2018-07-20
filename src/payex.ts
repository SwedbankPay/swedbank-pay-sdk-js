import request = require('request-promise');
import Promise = require('bluebird');

export interface PayexConfig {
  // The OAuth 2 Access Token created in PayEx Admin.
  merchantToken: string;
  // A trace identifier used to trace calls through the PayEx systems (ref RFC
  // 7329). Each request must mint a new GUID/UUID. If no  Session-Id is
  // provided, PayEx will generate one.
  sessionId?: string;
  // The IP address of the consumer as well as the host and protocol of the
  // consumer-facing web page. Only the consumer IP address is required, the
  // other parameters are optional. See RFC 7239 for details.
  consumerIp: string;
  // Used to run in test-mode. The requests will be sent to Payex' Test API.
  testMode: boolean;
}

interface Headers {
  [x: string]: string;
}

export class Payex {
  config!: PayexConfig;

  urls = {
    'test': 'https://api.externalintegration.payex.com/',
    'prod': 'https://api.payex.com/'
  };

  /**
   * Payex Constructor
   * @param  config PayexConfig
   * @return        null
   */
  constructor(config?: PayexConfig) {
    if (config) {
      this.config = config;
    }
  }

  setMerchantToken(merchantToken: string) {
    this.config.merchantToken = merchantToken;
  }

  setSessionId(sessionId: string) {
    this.config.sessionId = sessionId;
  }

  setConsumerIp(consumerIp: string) {
    this.config.consumerIp = consumerIp;
  }

  protected getUrl() {
    return this.config.testMode ? this.urls.test : this.urls.prod;
  }

  protected getHeaders() {
    const headers: Headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    };

    if (this.config.sessionId) {
      headers['Session-Id'] = this.config.sessionId;
    }

    if (this.config.consumerIp) {
      // TODO: Make the client able to add consumer-facing website.
      headers['Forwarded'] = 'for=' + this.config.consumerIp + ';';
    }

    return headers;
  }

  protected request<T>(method: string, operation: string): Promise<T> {
    return Promise.resolve(request({
      method,
      baseUrl: this.getUrl(),
      uri: operation,
      headers: this.getHeaders(),
      auth: {bearer: this.config.merchantToken}
    }));
  }
}
