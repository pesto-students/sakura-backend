import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/db/entity/product/category.entity';
import { SubCategory } from 'src/db/entity/product/sub-category.entity';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category, SubCategory])]
})
export class CategoryModule { }
