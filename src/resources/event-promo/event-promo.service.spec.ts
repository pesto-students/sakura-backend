import { Test, TestingModule } from '@nestjs/testing';
import { EventPromoService } from './event-promo.service';

describe('EventPromoService', () => {
  let service: EventPromoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventPromoService],
    }).compile();

    service = module.get<EventPromoService>(EventPromoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
