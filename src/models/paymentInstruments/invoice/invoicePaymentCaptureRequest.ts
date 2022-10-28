import { BaseModel } from '../../generics/baseModel';
import { CaptureTransaction } from '../transactions/captureTransaction';
import * as v from 'class-validator'
import { Type } from 'class-transformer';

class ItemDescription extends BaseModel {
    @v.IsNumber()
    amount: number;

    @v.IsString()
    description: string;
}

class VatSummary extends BaseModel {
    
    @v.IsNumber()
    amount: number;
    
    @v.IsNumber()
    vatPercent: number;
    
    @v.IsNumber()
    vatAmount: number;
}

export class InvoicePaymentCaptureReqest extends CaptureTransaction{
    @v.IsArray()
    @Type(() => ItemDescription)
    itemDescriptions: ItemDescription[];

    @v.IsArray()
    @Type(() => VatSummary)
    vatSummary: VatSummary[];
}