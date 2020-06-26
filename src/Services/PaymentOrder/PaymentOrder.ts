import { SwedbankBase } from '../../SwedbankBase';
import { MerchantConfig } from '../../MerchantConfig';

export class PaymentOrder extends SwedbankBase {
  constructor(config: MerchantConfig) {
    super(config);
  }

}
