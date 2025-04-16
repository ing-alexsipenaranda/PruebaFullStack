// src/adapters/out/repositories/products/product.repository.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRepositoryPort } from '../../../../ports/products/product.repository';
import { Product } from '../../../persistence/products/product.entity';

@Injectable()
export class ProductRepositoryService implements ProductRepositoryPort {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id }) ?? null;
  }

  async save(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }
}