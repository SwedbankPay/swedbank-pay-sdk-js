import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { CardPaymentVerification } from './cardPaymentVerification';

export class CardPaymentVerifications extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => CardPaymentVerification)
    verificationList: CardPaymentVerification[];
}