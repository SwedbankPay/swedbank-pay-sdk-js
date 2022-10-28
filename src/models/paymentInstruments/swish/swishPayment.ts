import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../payment-instrument';
import { SwishSaleListResponse } from './swishSaleListResponse';

export class SwishPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => SwishSaleListResponse)
    sales: SwishSaleListResponse;
}