import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { State } from '../../enums/state';
import { TransactionType } from '../../enums/transaction-type';
import { Amount } from '../../generics/amount';
import { HttpOperation } from '../../generics/http-operation';
import { Identifiable } from '../../generics/identifiable';
import { Problem } from '../../generics/problem';

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

  @v.IsArray()
  @v.ValidateNested()
  @Type(() => HttpOperation)
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
