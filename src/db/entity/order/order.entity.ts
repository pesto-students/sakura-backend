import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Cart } from "./cart.entity";


export enum PaymentTypeEnum {
    cashOnDelivery = "cod",
    paytm = "paytm",
    card = "card"
}

export enum PaymentStatusEnum {
    processed = "processed",
    pending = "pending",
    error = "error"
}

@Entity("order")
export class Order {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    cartId: number;

    @OneToOne(() => Cart, cart => cart.order)
    @JoinColumn({name: "cartId"})
    cart: Cart;

    @Column({ type: "int", unsigned: true })
    userId: number;

    @Column({type: "enum", enum: PaymentTypeEnum, default: PaymentTypeEnum.cashOnDelivery})
    paymentType: PaymentTypeEnum;

    @Column({type: "enum", enum: PaymentTypeEnum, default: PaymentTypeEnum.cashOnDelivery})
    paymentStatus: PaymentStatusEnum;

    @Column({ type: "varchar", length: 20 })
    transactionId: string;
    
    @Column(type => LoggerModel)
    logger: LoggerModel;

}