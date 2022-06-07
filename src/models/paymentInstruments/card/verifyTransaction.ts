import { Transaction } from "../transactions/transaction";
import * as v from 'class-validator'

export class VerifyTransaction extends Transaction {
    @v.IsUrl()
    activities: URL;
}