import { GenericResource } from '../../../models/generics/GenericResource';
import { MetaData } from '../../../models/generics/MetaData-resource';
import { PaymentProperties } from '../../../models/payment';
import { OrderItem } from './order-item';
import { PayeeInfo } from './payee-info';
import { PayersInfo } from './payers-info';


export interface PaymentOrderProperties extends PaymentProperties{  
  currency: string;
  currentPayment: GenericResource;
  metadata: MetaData;
  operation: string;
  orderItems: OrderItem;
  payeeInfo: PayeeInfo;
  payers: PayersInfo;
  payments: string;
  remainingCancelAmount: number;
  settings: string;
  urls: GenericResource;
  vatAmount: number;
}
