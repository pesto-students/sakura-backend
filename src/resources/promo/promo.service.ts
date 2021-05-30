import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductStatusEnum } from 'src/db/entity/product/product.entity';
import { DiscountStatusEnum } from 'src/db/entity/promo/discount.entity';
import { EventCollection } from 'src/db/entity/promo/event-collection.entity';
import { EventPromo, EventPromoStatusEnum, EventTypeEnum } from 'src/db/entity/promo/event-promo.entity';
import { PublicAsset } from 'src/db/entity/public-assets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromoService {

    constructor(
        @InjectRepository(EventPromo)
        private eventPromoRepository: Repository<EventPromo>,
        @InjectRepository(EventCollection)
        private eventCollectionRepository: Repository<EventPromo>,
    ) { }

    async getActiveExclusiveDeals() {
        const activeExclusivePromos = await this.eventPromoRepository.createQueryBuilder("promo")
            .innerJoin("promo.carouselImage", "carouselImage")
            .select([
                "promo.id", "promo.name", "promo.description",
                "promo.status", "promo.eventType", "promo.carouselImageId",
                "promo.logger.updatedOn"
            ])
            .addSelect(["carouselImage.fileType", "carouselImage.uri"])
            .where({ eventType: EventTypeEnum.exclusive, status: EventPromoStatusEnum.active })
            .orderBy("promo.logger.updatedOn", "DESC")
            .getMany();
        return activeExclusivePromos;
    }

    async getActiveHotDeals() {
        // const activeHotDeals = await this.eventPromoRepository.createQueryBuilder("promo")
        //     .innerJoinAndSelect("promo.eventCollection", "eventCollection")
        //     .innerJoinAndSelect("eventCollection.products", "products")
        //     .where({ eventType: EventTypeEnum.hotDeal, status: EventPromoStatusEnum.active })
        //     .getMany();

        const activeHotDeals = await this.eventPromoRepository.createQueryBuilder("promo")
            .innerJoin("promo.eventCollection", "eventCollection")
            .innerJoin("eventCollection.discount", "discount")
            .innerJoin("eventCollection.product", "product")
            .innerJoin("product.productClass", "productClass")
            .innerJoin("product.productAssets", "productAssets")
            .innerJoin("product.inventory", "inventory")
            .innerJoin("productAssets.publicAsset", "file")
            .select([
                "promo.id", "promo.name", "promo.description",
                "promo.status", "promo.eventType",
                "promo.logger.updatedOn"
            ])
            .addSelect(["eventCollection.productId", "eventCollection.discountId"])
            .addSelect(["discount.status", "discount.discountRate"])
            .addSelect(["product.name", "product.description", "product.color", "product.size"])
            .addSelect(["productClass.brandName", "productClass.rating", "productClass.status"])
            .addSelect(["inventory.costPrice", "inventory.retailPrice"])
            .addSelect(["productAssets.assetId", "productAssets.isDefault"])
            .addSelect(["file.fileType", "file.uri"])
            .where({ eventType: EventTypeEnum.hotDeal, status: EventPromoStatusEnum.active })
            .andWhere("productClass.status = :productClassStatus", { productClassStatus: ProductStatusEnum.active })
            .andWhere("discount.status = :discountState", { discountState: DiscountStatusEnum.active })
            .getMany();

        return activeHotDeals;
    }
}