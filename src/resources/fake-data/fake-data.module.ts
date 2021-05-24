import { Module } from '@nestjs/common';
import { FakeCategoryService } from './fake-category.service';
import { FakeProductService } from './fake-product.service';
import { FakeEventPromoService } from './fake-event-promo.service';

@Module({
  providers: [FakeProductService, FakeCategoryService, FakeEventPromoService],
  exports: [FakeProductService, FakeCategoryService, FakeEventPromoService]
})
export class FakeDataModule {}
