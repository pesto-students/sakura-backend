import { Controller, Get } from '@nestjs/common';
import { EventPromoService } from './event-promo.service';

@Controller('event-promo')
export class EventPromoController {
    constructor(private eventPromoService: EventPromoService) {}

    @Get()
    getPromotionalEvents() {
        return this.eventPromoService.getPromotedEvents();
    }
}
