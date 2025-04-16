import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Transaction } from '../../persistence/transactions/transaction.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Transaction, { eager: true })
  @JoinColumn({ name: 'transactionId' })
  transaction: Transaction;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deliveryDate: Date;

  @Column()
  deliveryStatus: string;  // e.g. "IN_PROGRESS", "SHIPPED", "DELIVERED"
}