import { OrderItem } from '../../../Services/PaymentOrder/models/OrderItem';
import { PayeeInfo } from '../../../Services/PaymentOrder/models/PayeeInfo';
import { RiskIndicator } from '../../../Services/PaymentOrder/models/RiskIndicator';
import { Amount } from '../../generics/amount';
import { Currency } from '../../currency';
import { Language } from '../../language';
import { MetaData } from '../../generics/MetaData-resource';
import { Operation } from '../../enums/operation';
import { Urls } from '../../generics/urls';
import { Payer } from '../payer';
import { PaymentOrderPaymentOptionsItems } from '../paymentOrderPaymentOptionsItems';
import { BaseModel } from '../../generics/baseModel';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

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