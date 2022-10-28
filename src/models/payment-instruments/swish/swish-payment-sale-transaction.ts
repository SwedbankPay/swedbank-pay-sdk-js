import { BaseModel } from '../../generics/base-model';
import { Msisdn } from '../../msisdn';

export class SwishPaymentSaleTransaction extends BaseModel{
    msisdn: Msisdn;
}