import * as v from 'class-validator';
import { Amount } from "../../generics/amount";
import { HttpOperation } from "../../generics/httpOperation";
import { Identifiable } from "../../generics/identifiable";
import { Problem } from "../../generics/problem";
import { State } from "../../enums/state";
import { TransactionType } from "../../enums/transactionType";
import { Type } from 'class-transformer';

export class Transaction extends Identifiable {
    @v.IsString()
    created: string;
    
    @v.IsString()
    updated: string;
    
    @v.IsString()
    activity: string;
    
    @Type(() => Amount)
    @v.ValidateNested()
    amount: Amount;
    
    @v.IsString()
    description: string;
    
    @v.IsBoolean()
    isOperational: boolean;
    
    @v.IsNumber()
    number: number;
    
    // TODO: Figure out how to validate content of Array
    @v.IsArray()
    operations: HttpOperation[];
    
    @v.IsString()
    payeeReference: string;
    
    @v.IsEnum(State)
    state: State;
    
    @v.IsEnum(TransactionType)
    type: TransactionType;
    
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
    
    @v.ValidateNested()
    @Type(() => Problem)
    problem: Problem;
}