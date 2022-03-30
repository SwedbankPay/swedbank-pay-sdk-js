import { BaseModel } from "../../generics/baseModel";
import { CaptureTransaction } from "../transactions/captureTransaction";
import * as v from 'class-validator'
import { Type } from "class-transformer";

export class InvoicePaymentCaptureReqest extends CaptureTransaction{
    @v.IsArray()
    @Type(() => ItemDescription)
    itemDescriptions: ItemDescription[];

    @v.IsArray()
    @Type(() => vatSummary)
    vatSummary: vatSummary[];
}

class ItemDescription extends BaseModel {
    @v.IsNumber()
    amount: number;

    @v.IsString()
    description: string;
}

class vatSummary extends BaseModel {
    
    @v.IsNumber()
    amount: number;
    
    @v.IsNumber()
    vatPercent: number;
    
    @v.IsNumber()
    vatAmount: number;
}