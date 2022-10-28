import * as v from 'class-validator';
import { PayeeInfo } from '../../Services/PaymentOrder/models/PayeeInfo';

export class PaymentOrderPayeeInfo extends PayeeInfo {
    @v.IsString()
    corporationId: string;

    @v.IsString()
    corporationName: string;
}