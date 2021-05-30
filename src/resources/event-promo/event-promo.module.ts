import { Module } from '@nestjs/common';
import { EventPromoController } from './event-promo.controller';
import { EventPromoService } from './event-promo.service';

@Module({
  controllers: [EventPromoController],
  providers: [EventPromoService],
  imports: []
})
export class EventPromoModule { }
