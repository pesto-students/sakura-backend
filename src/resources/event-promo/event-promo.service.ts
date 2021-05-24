import { Injectable } from '@nestjs/common';
import { FakeEventPromoService } from 'src/fake-data/fake-event-promo.service';

@Injectable()
export class EventPromoService {

    constructor(private fakeEventPromoService: FakeEventPromoService) {}

    getPromotedEvents() {
        return this.fakeEventPromoService.getEventPromos();
    }
}
