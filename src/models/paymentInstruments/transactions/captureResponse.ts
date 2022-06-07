import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Transaction } from "./transaction";

export class CaptureResponse extends Identifiable {
    @v.IsUrl()
    payment: URL;

    @v.ValidateNested()
    @Type(() => Transaction)
    capture: Transaction;
}