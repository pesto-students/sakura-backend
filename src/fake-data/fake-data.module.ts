import { Module } from '@nestjs/common';
import { FakeCategoryService } from './fake-category.service';
import { FakeProductService } from './fake-product.service';

@Module({
  providers: [FakeProductService, FakeCategoryService],
  exports: [FakeProductService, FakeCategoryService]
})
export class FakeDataModule {}
