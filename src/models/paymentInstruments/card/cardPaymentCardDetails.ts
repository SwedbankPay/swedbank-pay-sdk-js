import * as v from 'class-validator';
import { BaseModel } from "../../generics/baseModel";

export class CardPaymentCardDetails extends BaseModel{
    @v.IsNumber()
    cardExpiryMonth: number;

    @v.IsNumber()
    cardExpiryYear: number;

    @v.IsString()
    cardHolderName: string;

    @v.IsString()
    cardNumber: string;

    @v.IsString()
    cardVerificationCode: string;
}