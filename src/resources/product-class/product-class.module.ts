import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product/product.entity';
import { ProductClass } from 'src/db/entity/product/product-class.entity';
import { ProductClassController } from './product-class.controller';
import { ProductClassService } from './product-class.service';

@Module({
    providers: [ProductClassService],
    controllers: [ProductClassController],
    imports: [TypeOrmModule.forFeature([ProductClass, Product])]
})
export class ProductClassModule { }
