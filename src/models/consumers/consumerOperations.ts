import { HttpOperation } from "../generics/httpOperation";
import OperationsBase from "../generics/operationsBase";

export interface ConsumerOperations extends OperationsBase {
    redirectConsumerIdentification: HttpOperation;
    viewConsumerIdentification: HttpOperation;
}