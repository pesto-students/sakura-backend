import { Module } from '@nestjs/common';
import { FakeProductService } from './fake-product.service';

@Module({
  providers: [FakeProductService],
  exports: [FakeProductService]
})
export class FakeDataModule {}
