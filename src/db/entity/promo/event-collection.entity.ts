import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Product } from "../product/product.entity";
import { Discount } from "./discount.entity";
import { EventPromo } from "./event-promo.entity";


export enum EventProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("event_collection")
export class EventCollection {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true, unique: false })
    eventPromoId: number;

    @ManyToOne(() => EventPromo, promo => promo.eventCollection)
    @JoinColumn({ name: "eventPromoId" })
    eventPromo: EventPromo;

    @Column({ type: "enum", enum: EventProductStatusEnum, default: EventProductStatusEnum.active })
    status: EventProductStatusEnum;

    @Column({ type: "int", unsigned: true, unique: false })
    productId: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "productId" })
    product: Product[];

    @Column({ type: "int", unsigned: true })
    discountId: number;

    @ManyToOne(() => Discount)
    @JoinColumn({ name: "discountId" })
    discount: Discount;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}