import * as v from 'class-validator'
import { ReversalTransaction } from '../transactions/reversalTransaction'
import { InvoiceType } from './invoicePaymentInvoiceType'

export class ReversalRequestDetails extends ReversalTransaction {
    @v.IsEnum(InvoiceType)
    activity: InvoiceType;

    @v.IsString()
    receiptReference?: string;
}