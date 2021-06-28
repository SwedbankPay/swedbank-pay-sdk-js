import { GenericResource } from "../../../models/GenericResource";
import { MetaData } from "../../../models/MetaData";
import { PaymentProperties } from "../../../models/Payment";
import { OrderItem } from "./OrderItem";
import { PayeeInfo } from "./PayeeInfo";
import { PayersInfo } from "./PayersInfo";


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
