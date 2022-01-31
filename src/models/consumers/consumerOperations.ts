import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { HttpOperation } from "../generics/httpOperation";
import OperationsBase from "../generics/operationsBase";

export class ConsumerOperations extends OperationsBase {
    @v.ValidateNested()
    @Type(() => HttpOperation)
    redirectConsumerIdentification: HttpOperation;
    @v.ValidateNested()
    @Type(() => HttpOperation)
    viewConsumerIdentification: HttpOperation;
}