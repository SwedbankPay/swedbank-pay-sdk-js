/* eslint @typescript-eslint/ban-ts-ignore: 0 */
import * as nock from 'nock';
import { SwedbankBase } from '../SwedbankBase';

const runOperationScope = nock('https://api.payex.com')
  .get('/test')
  .reply(200);

const genericResourceScope = nock('https://api.payex.com')
  .get('/generic-resource')
  .reply(200);

describe('SwedbankBase', () => {
  let swedbankBase: SwedbankBase;

  beforeAll(() => {
    swedbankBase = new SwedbankBase({
      merchantToken: '',
      consumerIp: '1.2.3.4',
    });
  });

  it('should runOperation', async () => {
    await swedbankBase.runOperation('https://api.payex.com/test');
    expect(runOperationScope.isDone()).toBeTruthy();
  });

  it('should run genericOperation with id', async () => {
    await swedbankBase.GenericResource('generic-resource');
    expect(genericResourceScope.isDone()).toBeTruthy();
  });

  it('should run genericOperation with no id', async () => {
    const res = await swedbankBase.GenericResource(undefined);
    expect(res).toBeFalsy();
  });

  it('should return test environment url', async () => {
    const res = await swedbankBase.getUrl('test');
    // @ts-expect-error
    expect(res).toBe(swedbankBase.apiUrls['test']);
  });

  it('should return prod environment url', async () => {
    const res = await swedbankBase.getUrl('prod');
    // @ts-expect-error
    expect(res).toBe(swedbankBase.apiUrls['prod']);
  });

  it('should return test environment url when set in constructor', async () => {
    const swedbank = new SwedbankBase({
      merchantToken: '',
      consumerIp: '1.2.3.4',
      testMode: true
    });
    const res = await swedbank.getUrl();
    // @ts-expect-error
    expect(res).toBe(swedbank.apiUrls['test']);
  });
});
