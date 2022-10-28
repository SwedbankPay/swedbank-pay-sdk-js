import { ConsumerOperations } from './consumer-operations';

export interface ConsumersResponse {
    operations: ConsumerOperations;
    token: string;
}