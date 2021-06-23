export interface AuthorizationTransaction {
    amount: Amount;
    created: string;
    description: string;
    failedActivityName: string;
    failedErrorCode: string;
    failedErrorDescription: string;
    failedReason: string;
    isOperational: boolean;
    number: number;
    operations: OperationList;
    payeeReference: string;
    state: State;
    type: string;
    updated: string;
    vatAmount: Amount;
}