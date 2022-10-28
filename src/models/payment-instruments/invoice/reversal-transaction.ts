import * as v from 'class-validator'
import { ReversalTransaction } from '../transactions/reversal-transaction'
import { InvoiceType } from './invoice-payment-invoice-type'

export class ReversalRequestDetails extends ReversalTransaction {
    @v.IsEnum(InvoiceType)
    activity: InvoiceType;

    @v.IsString()
    receiptReference?: string;
}