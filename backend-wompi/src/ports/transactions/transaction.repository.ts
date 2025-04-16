// src/ports/transactions/transaction.repository.ts
import { Transaction } from '../../adapters/persistence/transactions/transaction.entity';

export interface TransactionRepositoryPort {
  createTransaction(transaction: Transaction): Promise<Transaction>;
  updateTransaction(transaction: Transaction): Promise<Transaction>;
  findOne(id: number): Promise<Transaction | null>;
}