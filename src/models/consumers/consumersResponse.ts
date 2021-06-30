import { ConsumerOperations } from "./consumerOperations";

export interface ConsumersResponse {
    operations: ConsumerOperations;
    token: string;
}