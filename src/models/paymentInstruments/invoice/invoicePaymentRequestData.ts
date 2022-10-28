import * as v from 'class-validator'
import { BaseModel } from '../../generics/baseModel';
import { InvoiceType } from './invoicePaymentInvoiceType';

export class InvoicePaymentRequestData extends BaseModel{
    @v.IsEnum(InvoiceType)
    invoiceType: InvoiceType;
}