import { Amount } from "../../generics/amount";
import { Operation } from "../../enums/operation";
import { BaseModel } from "../../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class TrustlyReversalTransaction extends BaseModel {
    @v.IsEnum(Operation)
    transactionActivity: Operation;

    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;

    @v.IsString()
    recepitReference: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}