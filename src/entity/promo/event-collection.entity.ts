import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum EventProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("event_collection")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    eventPromoId: number;

    @Column({type: "enum", enum: EventProductStatusEnum, default: EventProductStatusEnum.active})
    status: EventProductStatusEnum;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @Column({ type: "int", unsigned: true })
    discountId: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}