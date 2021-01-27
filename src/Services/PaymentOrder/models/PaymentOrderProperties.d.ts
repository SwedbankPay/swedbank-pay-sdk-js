import { GenericResource } from "../../../models/GenericResource";
import { MetaData } from "../../../models/MetaData";
import { OrderItem } from "./OrderItem";
import { PayeeInfo } from "./PayeeInfo";
import { PayersInfo } from "./PayersInfo";


export interface PaymentOrderProperties {
  id: string;
  amount: number;
  created: string;
  currency: string;
  currentPayment: GenericResource;
  description: string;
  language: string;
  metadata: MetaData;
  operation: string;
  orderItems: OrderItem;
  payeeInfo: PayeeInfo;
  payers: PayersInfo;
  payments: string;
  remainingCancelAmount: number;
  remainingCaptureAmount: number;
  remainingReversalAmount: number;
  settings: string;
  state: string;
  updated: string;
  urls: GenericResource;
  userAgent: string;
  vatAmount: number;
}
