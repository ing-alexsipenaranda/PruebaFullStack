export class ProductRepository {}
// src/ports/products/product.repository.ts
import { Product } from '../../adapters/persistence/products/product.entity';

export interface ProductRepositoryPort {
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product | null>;
  save(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
}