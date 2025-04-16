import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './adapters/persistence/products/product.entity';

import { ProductsModule } from './core/products/products/products.module';
import { ProductService } from './core/products/product/product.service';
import { ProductController } from './adapters/in/controllers/products/product/product.controller';
import { ProductRepositoryService } from './adapters/out/repositories/products/product.repository.service';
import { ProductRepository } from './ports/products/product.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1004913459',
      database: 'Wompi',
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService,ProductRepositoryService],
})
export class AppModule {}
