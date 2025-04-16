// src/adapters/persistence/transactions/transaction.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../persistence/products/product.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  // Identifica el producto relacionado con la transacción
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  status: string;  // PENDING, COMPLETED, FAILED

  @Column()
  deliveryAddress: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  transactionDate: Date;
}