import { PayeeInfo } from '../../Services/PaymentOrder/models/PayeeInfo';
import * as v from 'class-validator';

export class PaymentOrderPayeeInfo extends PayeeInfo {
    @v.IsString()
    corporationId: string;

    @v.IsString()
    corporationName: string;
}