import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product/product.entity';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product])]
})
export class ProductModule { }
