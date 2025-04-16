// src/ports/deliveries/delivery.repository.ts
import { Delivery } from '../../adapters/persistence/delivery/delivery';

export interface DeliveryRepositoryPort {
  createDelivery(delivery: Delivery): Promise<Delivery>;
  updateDelivery(delivery: Delivery): Promise<Delivery>;
  findByTransactionId(transactionId: number): Promise<Delivery | null>;
}