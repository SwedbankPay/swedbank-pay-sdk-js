import { GenericResource } from "../../../models/GenericResource";
import { MetaData } from "../../../models/MetaData";
import { Operation } from "../../../models/Operation";
import { OrderItem } from "./OrderItem";

export interface PaymentOrderResponse {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}

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

export interface PayeeInfo {

}

export interface PayersInfo {

}