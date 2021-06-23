export enum TransactionType {
    Unknown = default,
    Authorization,
    Capture,
    Reversal,
    Cancellation,
    Sale,
    Initialization,
    Verification
}