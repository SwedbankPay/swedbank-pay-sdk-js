import { Amount } from "../generics/amount";
import { PaymentType } from "../paymentInstruments/enums/paymentType";
import { State } from "../enums/state";
import { BaseModel } from "../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";

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