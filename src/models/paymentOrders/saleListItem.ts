import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { State } from '../enums/state';
import { Amount } from '../generics/amount';
import { BaseModel } from '../generics/base-model';
import { PaymentType } from '../paymentInstruments/enums/payment-type';

export class SaleListItem extends BaseModel{
    @v.IsUrl()
    id: URL;

    @v.IsString()
    created: string;

    @v.IsString()
    updated: string;

    @v.IsEnum(PaymentType)
    type: PaymentType;

    @v.IsEnum(State)
    state: State;

    @v.IsNumber()
    number: number;

    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;

    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}