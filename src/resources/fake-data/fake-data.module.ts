import { Module } from '@nestjs/common';
import { FakeCategoryService } from './fake-category.service';
import { FakeEventPromoService } from './fake-event-promo.service';
import { FakeProductService } from './fake-product.service';


@Module({
  providers: [FakeProductService, FakeCategoryService, FakeEventPromoService],
  exports: [FakeProductService, FakeCategoryService, FakeEventPromoService]
})
export class FakeDataModule {}
