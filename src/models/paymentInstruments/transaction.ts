export interface Transaction extends Identifiable {
    created: string;
    updated: string;
    activity: string;
    amount: Amount;
    description: string;
    isOperational: boolean;
    number: number;
    operations: OperationList;
    payeeReference: string;
    state: State;
    type: TransactionType;
    vatAmount: Amount;
    problem: Problem;
}