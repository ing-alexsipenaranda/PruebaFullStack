// src/ports/customers/customer.repository.ts
import { Customer } from '../../adapters/persistence/customer/customer.entity';

export interface CustomerRepositoryPort {
  createCustomer(customer: Customer): Promise<Customer>;
  findOne(id: number): Promise<Customer | null>;
}