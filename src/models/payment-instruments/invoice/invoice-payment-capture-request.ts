import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { CaptureTransaction } from '../transactions/capture-transaction';

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

export class InvoicePaymentCaptureReqest extends CaptureTransaction {
  @v.IsArray()
  @Type(() => ItemDescription)
  itemDescriptions: ItemDescription[];

  @v.IsArray()
  @Type(() => VatSummary)
  vatSummary: VatSummary[];
}
