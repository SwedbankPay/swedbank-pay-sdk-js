import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Transaction } from './transaction';

export class TransactionResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() => Transaction)
    transaction: Transaction;
}