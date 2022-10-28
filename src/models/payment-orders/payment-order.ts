import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PayeeInfo } from '../../Services/payment-order/models/payee-info';
import { Currency } from '../currency';
import { State } from '../enums/state';
import { MetaData } from '../generics/MetaData-resource';
import { Amount } from '../generics/amount';
import { Identifiable } from '../generics/identifiable';
import { Urls } from '../generics/urls';
import { Language } from '../language';
import { OrderItemListResponse } from './order-item-list-response';
import { CurrentPaymentResponse } from './response models/current-payment-response';
import { PayerResponse } from './response models/payer-response';

export class PaymentOrder extends Identifiable {
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    created: string;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.ValidateNested()
    @Type(() => CurrentPaymentResponse)
    currentPayment: CurrentPaymentResponse;

    @v.IsString()
    description: string;

    @v.ValidateNested()
    @Type(() => Language)
    language: Language;

    @v.ValidateNested()
    @Type(() => MetaData)
    metadata: MetaData;

    @v.IsString()
    operation: string;

    @v.ValidateNested()
    @Type(() => OrderItemListResponse)
    orderItems: OrderItemListResponse;

    @v.ValidateNested()
    @Type(() => PayeeInfo)
    payeeInfo: PayeeInfo;

    @v.ValidateNested()
    @Type(() => PayerResponse)
    payers: PayerResponse;

    @v.ValidateNested()
    @Type(() => Identifiable)
    payments: Identifiable;
    
    @v.ValidateNested()
    @Type(() => Amount)
    remainingCancelAmount: Amount;
    
    @v.ValidateNested()
    @Type(() => Amount)
    remainingCaptureAmount: Amount;
    
    @v.ValidateNested()
    @Type(() => Amount)
    remainingReversalAmount: Amount;


    @v.ValidateNested()
    @Type(() => Identifiable)
    settings: Identifiable;

    @v.IsEnum(State)
    state: State;

    @v.IsString()
    updated: string;

    @v.ValidateNested()
    @Type(() => Urls)
    urls: Urls;

    @v.IsString()
    userAgent: string;
    
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}