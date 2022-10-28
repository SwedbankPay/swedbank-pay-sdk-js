import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { HttpOperation } from '../generics/http-operation';
import OperationsBase from '../generics/operations-base';

export class ConsumerOperations extends OperationsBase {
    @v.ValidateNested()
    @Type(() => HttpOperation)
    redirectConsumerIdentification: HttpOperation;
    @v.ValidateNested()
    @Type(() => HttpOperation)
    viewConsumerIdentification: HttpOperation;
}