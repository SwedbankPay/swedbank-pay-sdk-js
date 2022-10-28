import * as v from 'class-validator'
import { BaseModel } from '../../generics/baseModel';
import { InvoiceType } from './invoice-payment-invoice-type';

export class InvoicePaymentRequestData extends BaseModel{
    @v.IsEnum(InvoiceType)
    invoiceType: InvoiceType;
}