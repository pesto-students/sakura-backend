import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventCollection } from "src/db/entity/promo/event-collection.entity";
import { EventPromo } from "src/db/entity/promo/event-promo.entity";
import { PromoController } from "./promo.controller";
import { PromoService } from "./promo.service";

@Module({
    providers: [PromoService],
    controllers: [PromoController],
    imports: [TypeOrmModule.forFeature([EventPromo, EventCollection])],
})
export class PromoModule { }