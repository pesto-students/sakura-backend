import { Test, TestingModule } from '@nestjs/testing';
import { EventPromoController } from './event-promo.controller';

describe('EventPromoController', () => {
  let controller: EventPromoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventPromoController],
    }).compile();

    controller = module.get<EventPromoController>(EventPromoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
