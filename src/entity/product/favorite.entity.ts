import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Product } from "./product.entity";

export enum FavoriteStatusEnum {
    active = "active",
    inactive = "inactive"
}


@Entity("favorite")
export class Favorite {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @ManyToOne(() => Product, product => product.favorites)
    @JoinColumn({name: "productId"})
    product: Product;

    @Column({type: "enum", enum: FavoriteStatusEnum, default: FavoriteStatusEnum.active})
    status: FavoriteStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}