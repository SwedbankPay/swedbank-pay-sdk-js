import * as v from 'class-validator';
import { Transaction } from '../transactions/transaction';

export class VerifyTransaction extends Transaction {
  @v.IsUrl()
  activities: URL;
}
