import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Currency } from '../currency';
import { Operation } from '../enums/operation';
import { State } from '../enums/state';
import { Amount } from '../generics/amount';
import { Identifiable } from '../generics/identifiable';
import { MetaData } from '../generics/meta-data-resource';
import { PayeeInfo } from '../generics/payee-info'
import { Urls } from '../generics/urls';
import { Language } from '../language';
import { PaymentIntent } from './enums/payment-intent';
import { PriceListResponse } from './price-list-response';
import { CancellationListResponse } from './transactions/cancellation-list-response';
import { CaptureListResponse } from './transactions/capture-list-response';
import { ReversalListResponse } from './transactions/reversal-list-response';
import { TransactionListResponse } from './transactions/transaction-list-response';

export class PaymentInstrument extends Identifiable {
    
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;
    
    @v.ValidateNested()
    @Type(() => CancellationListResponse)
    cancellations: CancellationListResponse;

    @v.ValidateNested()
    @Type(() => CaptureListResponse)
    captures: CaptureListResponse;

    @v.IsString()
    created: string;

    @v.IsString()
    updated: string;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.IsString()
    description: string;

    @v.IsEnum(PaymentIntent)
    intent: PaymentIntent;

    @v.ValidateNested()
    @Type(() => Language)
    language: Language;

    @v.IsNumber()
    number: number;

    @v.IsEnum(Operation)
    operation: Operation;

    @v.ValidateNested()
    @Type(() => PayeeInfo)
    payeeInfo: PayeeInfo;

    @v.IsString()
    payerReference: string;

    @v.IsString()
    initiatingSystemUserAgent: string;

    @v.ValidateNested()
    @Type(() => PriceListResponse)
    prices: PriceListResponse;

    @v.ValidateNested()
    @Type(() => Amount)
    remainingCancellationAmount: Amount;

    @v.ValidateNested()
    @Type(() => Amount)
    remainingCaptureAmount: Amount;

    @v.ValidateNested()
    @Type(() => Amount)
    remainingReversalAmount: Amount;

    @v.IsEnum(State)
    state: State;

    @v.ValidateNested()
    @Type(() => TransactionListResponse)
    transactions: TransactionListResponse;

    @v.IsUrl()
    urls: Urls;

    @v.IsString()
    userAgent: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;

    @v.ValidateNested()
    @Type(() => ReversalListResponse)
    reversals: ReversalListResponse;

    @v.ValidateNested()
    @Type(() => MetaData)
    metadata: MetaData;
}