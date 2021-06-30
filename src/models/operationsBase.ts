import { HttpOperation } from "./httpOperation";
import { LinkRelation } from "./linkRelation";

export default interface OperationsBase {
    keys: LinkRelation[];
    values: HttpOperation[];
    count: number;
    isReadOnly: boolean;
}