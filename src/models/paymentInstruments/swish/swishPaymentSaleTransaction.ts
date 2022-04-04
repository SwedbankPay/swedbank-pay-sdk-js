import { BaseModel } from "../../generics/baseModel";
import { Msisdn } from "../../msisdn";

export class SwishPaymentSaleTransaction extends BaseModel{
    msisdn: Msisdn;
}