import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { User } from "../user/user.entity";
import { CartItem } from "./cart-item.entity";
import { Order } from "./order.entity";


export enum CartStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("cart")
export class Cart {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "userId"})
    user: User;

    @Column({type: "enum", enum: CartStatusEnum, default: CartStatusEnum.active})
    status: CartStatusEnum;

    @OneToMany(() => CartItem, cartItem => cartItem.cart)
    cartItems: CartItem[];

    @OneToOne(() => Order)
    order: Order;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}