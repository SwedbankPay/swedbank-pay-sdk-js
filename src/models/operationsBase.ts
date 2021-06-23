export interface OperationsBase {
    keys: LinkRelation[];
    values: HttpOperation[];
    count: number;
    isReadOnly: boolean;
}