import { Amount } from '../../generics/amount';
import { HttpOperation } from '../../generics/httpOperation';
import { State } from '../../enums/state';
import * as v from 'class-validator'
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';

export class AuthorizationTransaction extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    created: string;

    @v.IsString()
    description: string;

    @v.IsString()
    failedActivityName: string;

    @v.IsString()
    failedErrorCode: string;

    @v.IsString()
    failedErrorDescription: string;

    @v.IsString()
    failedReason: string;

    @v.IsBoolean()
    isOperational: boolean;

    @v.IsNumber()
    number: number;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => HttpOperation)
    operations: HttpOperation[];

    @v.IsString()
    payeeReference: string;

    @v.IsString()
    state: State;

    @v.IsString()
    type: string;

    @v.IsString()
    updated: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}