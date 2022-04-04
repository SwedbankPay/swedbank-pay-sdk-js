import { BaseModel } from "../../generics/baseModel";
import { ReversalTransaction } from "../transactions/reversalTransaction";

export class MobilePayPaymentReversalRequest extends BaseModel {
    transaction: ReversalTransaction;
}