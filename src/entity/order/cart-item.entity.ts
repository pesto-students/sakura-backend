import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Product } from "../product/product.entity";
import { Discount } from "../promo/discount.entity";
import { User } from "../user/user.entity";
import { Cart } from "./cart.entity";


export enum CartItemStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("cart_item")
export class CartItem {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    cartId: number;

    @ManyToOne(() => Cart, cart => cart.cartItems)
    @JoinColumn({name: "cartId"})
    cart: Cart;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @ManyToOne(() => Product)
    @JoinColumn({name: "productId"})
    product: Product;

    @Column({ type: "int", unsigned: true })
    discountId: number;

    @ManyToOne(() => Discount)
    @JoinColumn({name: "discountId"})
    discount: Discount;

    @Column({type: "enum", enum: CartItemStatusEnum, default: CartItemStatusEnum.active})
    status: CartItemStatusEnum;

    @Column({type: "decimal", precision: 10, scale: 2, unsigned: true})
    sellingPrice: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}