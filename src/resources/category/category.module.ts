import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { FakeDataModule } from 'src/fake-data/fake-data.module';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [FakeDataModule]
})
export class CategoryModule {}
