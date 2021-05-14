import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FakeDataModule } from 'src/fake-data/fake-data.module';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [FakeDataModule]
})
export class ProductModule {}
