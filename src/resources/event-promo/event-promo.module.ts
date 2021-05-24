import { Module } from '@nestjs/common';
import { FakeDataModule } from 'src/fake-data/fake-data.module';
import { EventPromoController } from './event-promo.controller';
import { EventPromoService } from './event-promo.service';

@Module({
  controllers: [EventPromoController],
  providers: [EventPromoService],
  imports: [FakeDataModule]
})
export class EventPromoModule {}
