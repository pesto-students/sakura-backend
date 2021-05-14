import { Module } from '@nestjs/common';
import { FakeDataModule } from './fake-data/fake-data.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [FakeDataModule, ProductModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
