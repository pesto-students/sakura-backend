import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ type: "longtext" })
    description: string;

    @Column({ type: "enum", enum: EventPromoStatusEnum, default: EventPromoStatusEnum.active })
    status: EventPromoStatusEnum;

    @Column({ type: "enum", enum: EventTypeEnum, default: EventTypeEnum.exclusive })
    eventType: EventTypeEnum;

    @OneToMany(() => EventCollection, eventCollection => eventCollection.eventPromo)
    eventCollection: EventCollection;

    @Column({ type: "int", unsigned: true, nullable: true })
    carouselImageId: number;

    @ManyToOne(() => PublicAsset, { nullable: true })
    @JoinColumn({ name: "carouselImageId" })
    carouselImage: PublicAsset;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}