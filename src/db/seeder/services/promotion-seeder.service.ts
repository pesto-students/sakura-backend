import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Discount } from 'src/db/entity/promo/discount.entity';
import { EventCollection } from 'src/db/entity/promo/event-collection.entity';
import { EventPromo } from 'src/db/entity/promo/event-promo.entity';
import { Repository } from 'typeorm';
import { discountData } from '../data/discount';
import { eventCollectionData } from '../data/event_collection';
import { eventPromoData } from '../data/event_promo';


@Injectable()
export class PromoSeederService {
    constructor(
        @InjectRepository(EventPromo)
        private eventPromoRepository: Repository<EventPromo>,
        @InjectRepository(EventCollection)
        private eventCollectionRepository: Repository<EventCollection>,
        @InjectRepository(Discount)
        private discountRepository: Repository<Discount>
    ) { }


    async seedEventPromo() {
        try {
            const allPromises = eventPromoData.map(eventPromo => {
                const newEventPromo = new EventPromo();
                newEventPromo.id = parseInt(eventPromo.id);
                newEventPromo.name = eventPromo.name;
                newEventPromo.description = eventPromo.description;
                newEventPromo.eventType = eventPromo.eventType;
                newEventPromo.carouselImageId = parseInt(eventPromo.carouselImageId);
                newEventPromo.status = eventPromo.status;

                return this.eventPromoRepository.save(newEventPromo);
            });
            await Promise.all(allPromises);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedDiscount() {
        try {
            const allPromises = discountData.map(discount => {
                const newDiscount = new Discount();
                newDiscount.id = parseInt(discount.id);
                newDiscount.name = discount.name;
                newDiscount.description = discount.description;
                newDiscount.coupon = discount.coupon;
                newDiscount.status = discount.status;
                newDiscount.discountRate = parseInt(discount.discountRate) || 0;
                newDiscount.minimumOrderQuantity = parseInt(discount.minimumOrderQuantity) || 0;
                newDiscount.minimumOrderValue = parseInt(discount.minimumOrderValue) || 0;

                return this.discountRepository.save(newDiscount);
            });
            await Promise.all(allPromises);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    async seedEventCollection() {
        try {
            const allPromises = eventCollectionData.map(eventCollection => {
                const newEventCollection = new EventCollection();
                newEventCollection.id = parseInt(eventCollection.id);
                newEventCollection.eventPromoId = parseInt(eventCollection.eventPromoId);
                newEventCollection.status = eventCollection.status;
                newEventCollection.productId = parseInt(eventCollection.productId);
                newEventCollection.discountId = parseInt(eventCollection.discountId);

                return this.eventCollectionRepository.save(newEventCollection);
            });
            await Promise.all(allPromises);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}