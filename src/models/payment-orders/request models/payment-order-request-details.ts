import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { OrderItem } from '../../../Services/payment-order/models/order-item';
import { PayeeInfo } from '../../../Services/payment-order/models/payee-info';
import { RiskIndicator } from '../../../Services/payment-order/models/risk-indicator';
import { Currency } from '../../currency';
import { Operation } from '../../enums/operation';
import { MetaData } from '../../generics/MetaData-resource';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/base-model';
import { Urls } from '../../generics/urls';
import { Language } from '../../language';
import { Payer } from '../payer';
import { PaymentOrderPaymentOptionsItems } from '../payment-order-payment-options-items';

export class PaymentOrderRequestDetails extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.IsString()
    description: string;
    
    @v.IsBoolean()
    generateRecurrenceToken: boolean;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => PaymentOrderPaymentOptionsItems)
    items: PaymentOrderPaymentOptionsItems[];

    @v.ValidateNested()
    @v.ValidateNested()
    language: Language;

    @v.ValidateNested()
    @Type(() => MetaData)
    metadata: MetaData;

    @v.IsEnum(Operation)
    operation: Operation;

    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItems: OrderItem[];

    @v.ValidateNested()
    @Type(() => PayeeInfo)
    payeeInfo: PayeeInfo;

    @v.ValidateNested()
    @Type(() => Payer)
    payer: Payer;

    @v.ValidateNested()
    @Type(() => RiskIndicator)
    riskIndicator: RiskIndicator;

    @v.IsUrl()
    urls: Urls;

    @v.IsString()
    userAgent: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;

    @v.IsBoolean()
    disablePaymentMenu?: boolean;
}