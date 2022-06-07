import { InvoiceType } from "./invoicePaymentInvoiceType";
import * as v from 'class-validator'
import { BaseModel } from "../../generics/baseModel";

export class InvoicePaymentRequestData extends BaseModel{
    @v.IsEnum(InvoiceType)
    invoiceType: InvoiceType;
}