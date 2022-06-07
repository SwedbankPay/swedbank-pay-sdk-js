import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { CardPaymentReversalTransaction } from "./cardPaymentReversalTransaction";
import { BaseModel } from "../../generics/baseModel";

export class CardPaymentReversalRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => CardPaymentReversalTransaction)
    transaction: CardPaymentReversalTransaction;
}