import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Favorite } from "./favorite.entity";
import { Inventory } from "./inventory.entity";
import { ProductAsset } from "./product-asset.entity";
import { ProductClass } from "./product-class.entity";


export enum ProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("product")
export class Product {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 2000 })
    description: string;

    @Column({ type: "varchar", length: 10 })
    color: string;

    @Column({ type: "varchar", length: 10 })
    size: string;

    @Column("simple-json")
    otherAttributes: { tags: string[] };

    @Column({ type: "enum", enum: ProductStatusEnum, default: ProductStatusEnum.active })
    status: ProductStatusEnum;

    @Column({ type: "int", unsigned: true })
    productClassId: number;

    @ManyToOne(() => ProductClass, productClass => productClass.products)
    @JoinColumn({ name: "productClassId" })
    productClass: ProductClass;

    @Column({ type: "int", unsigned: true })
    inventoryId: number;

    @OneToOne(() => Inventory)
    @JoinColumn({ name: "inventoryId" })
    inventory: Inventory;

    @OneToMany(() => Favorite, favorite => favorite.product)
    favorites: Favorite[];

    @OneToMany(() => ProductAsset, asset => asset.product)
    productAssets: ProductAsset[];

    @Column(type => LoggerModel)
    logger: LoggerModel;

}