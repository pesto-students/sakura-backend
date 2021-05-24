import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum CartItemStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("cart_item")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    userId: number;

    @Column({ type: "int", unsigned: true })
    cartId: number;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @Column({ type: "int", unsigned: true })
    discountId: number;

    @Column({type: "enum", enum: CartItemStatusEnum, default: CartItemStatusEnum.active})
    status: CartItemStatusEnum;

    @Column({type: "decimal", precision: 10, scale: 2, unsigned: true})
    sellingPrice: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}