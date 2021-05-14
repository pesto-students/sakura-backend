import { Module } from '@nestjs/common';
import { FakeDataModule } from './fake-data/fake-data.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [FakeDataModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
