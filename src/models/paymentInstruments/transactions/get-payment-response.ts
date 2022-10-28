import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Currency } from '../../currency';
import { Operation } from '../../enums/operation';
import { State } from '../../enums/state';
import { Amount } from '../../generics/amount';
import { Identifiable } from '../../generics/identifiable';
import { MetaData } from '../../generics/metadata';
import { PayeeInfo } from '../../generics/payeeInfo';
import { Urls } from '../../generics/urls';
import { Language } from '../../language';
import { PaymentIntent } from '../enums/paymentIntent';
import { Price } from '../price';
import { AuthorizationListResponse } from './authorization-list-response';
import { CancellationListResponse } from './cancellation-list-response';
import { SaleListResponse } from './sale-list-response';
import { TransactionListResponse } from './transaction-list-response';

export class GetPaymentResponse extends Identifiable {
    @v.IsNumber()
    number: number;

    @v.IsString()
    created: string;

    @v.IsString()
    updated: string;

    @v.IsString()
    instrument: string;

    @v.IsEnum(Operation)
    operation: Operation;

    @v.IsEnum(PaymentIntent)
    intent: PaymentIntent;

    @v.IsEnum(State)
    state: State;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Price)
    prices: Price[];
    amount: Amount;

    @v.IsString()
    description: string;

    @v.IsString()
    initiatingSystemUserAgent: string;

    @v.IsString()
    userAgent: string;

    @v.ValidateNested()
    @Type(() => Language)
    language: Language;

    @v.ValidateNested()
    @Type(() => TransactionListResponse)
    transactions: TransactionListResponse;

    @v.ValidateNested()
    @Type(() => AuthorizationListResponse)
    authorizations?: AuthorizationListResponse;

    @v.ValidateNested()
    @Type(() => SaleListResponse)
    sales?: SaleListResponse;

    @v.ValidateNested()
    @Type(() => CancellationListResponse)
    cancellations?: CancellationListResponse;

    @v.IsArray()
    @v.IsUrl()
    urls: Urls[];

    @v.ValidateNested()
    @Type(() => PayeeInfo)
    payeeInfo: PayeeInfo;

    @v.ValidateNested()
    @Type(() => MetaData)
    metadata: MetaData;
}