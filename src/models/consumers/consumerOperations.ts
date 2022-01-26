import { HttpOperation } from "../generics/httpOperation";
import OperationsBase from "../operationsBase";

export interface ConsumerOperations extends OperationsBase {
    redirectConsumerIdentification: HttpOperation;
    viewConsumerIdentification: HttpOperation;
}