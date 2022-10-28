import { Identifiable } from '../../generics/identifiable';
import { CardPaymentVerification } from './cardPaymentVerification';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class CardPaymentVerifyResponseDetails extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => CardPaymentVerification)
    verificationList: CardPaymentVerification[];
}