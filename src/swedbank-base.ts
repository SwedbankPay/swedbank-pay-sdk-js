import got, { Method, Response } from 'got';
import { MerchantConfig } from './merchant-config';

export class SwedbankBase {
  config: MerchantConfig;

  private apiUrls = {
    test: 'https://api.externalintegration.payex.com',
    prod: 'https://api.payex.com',
  };

  constructor(config: MerchantConfig) {
    this.config = config;
  }

  /**
   * @returns URL to API
   */
  getUrl(env?: 'test' | 'prod'): string {
    if(this.config.callbackOverride)
      return this.config.callbackOverride
    else
      return this.apiUrls[env ? env : this.config.testMode ? 'test' : 'prod'];
  }

  // eslint-disable-next
  async request<T>(
    path: string,
    body?: object,
    method?: Method,
  ): Promise<Response<T>> {
    return got<T>(path.replace(/^\/|\/$/g, ''), {
      method,
      headers: {
        authorization: `Bearer ${this.config.merchantToken}`,
        'user-agent': 'swedbank@swedbank-pay-js/0.0.0',
      },
      responseType: 'json',
      json: body,
      prefixUrl: this.getUrl(),
    });
  }

  async runOperation<T>(
    url: string,
    body?: object,
    method?: Method,
  ): Promise<Response<T>> {
    return got<T>(url.replace(/^\/|\/$/g, ''), {
      method,
      headers: {
        authorization: `Bearer ${this.config.merchantToken}`,
        'user-agent': 'swedbank@swedbank-pay-js/0.0.0',
      },
      responseType: 'json',
      json: body,
    });
  }

  async GenericResource<T>(id?: string): Promise<T> {
    if (id) {
      return (await this.request<T>(id)).body;
    }
    return null;
  }
}
