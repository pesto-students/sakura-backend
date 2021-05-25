import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { PublicAsset } from "../public-assets.entity";
import { EventCollection } from "./event-collection.entity";


export enum EventTypeEnum {
    exclusive = "exclusive",
    hotDeal = "hot-deal"
}

export enum EventPromoStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("event_promo")
export class EventPromo {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 45 })
    name: string;

    @Column({ type: "varchar", length: 200 })
    description: string;

    @Column({ type: "enum", enum: EventPromoStatusEnum, default: EventPromoStatusEnum.active })
    status: EventPromoStatusEnum;

    @Column({ type: "enum", enum: EventTypeEnum, default: EventTypeEnum.exclusive })
    eventType: EventTypeEnum;

    @OneToOne(() => EventCollection)
    eventCollection: EventCollection;

    @Column({ type: "int", unsigned: true })
    carouselImageId: number;

    @OneToOne(() => PublicAsset)
    @JoinColumn({name: "carouselImageId"})
    carouselImage: PublicAsset;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}