import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Product } from "../product/product.entity";
import { EventPromo } from "./event-promo.entity";


export enum EventProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("event_collection")
export class EventCollection {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    eventPromoId: number;
    
    @OneToOne(() => EventPromo, promo => promo.eventCollection)
    @JoinColumn({name: "eventPromoId"})
    eventPromo: EventPromo;

    @Column({type: "enum", enum: EventProductStatusEnum, default: EventProductStatusEnum.active})
    status: EventProductStatusEnum;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @ManyToOne(() => Product)
    @JoinColumn({name: "productId"})
    products: Product[];


    @Column({ type: "int", unsigned: true })
    discountId: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}