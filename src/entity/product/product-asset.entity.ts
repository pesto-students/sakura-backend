import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { PublicAsset } from "../public-assets.entity";
import { Product } from "./product.entity";


@Entity("product_asset")
export class ProductAsset {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 80 })
    name: string;

    @Column({ type: "varchar", length: 200 })
    description: string;

    @Column({ type: "int", unsigned: true })
    productId: number;

    @ManyToOne(() => Product, product => product.productAssets)
    @JoinColumn({name: "productId"})
    product: Product;

    @Column({ type: "int", unsigned: true })
    assetId: number;

    @OneToOne(() => PublicAsset)
    @JoinColumn({name: "assetId"})
    publicAsset: PublicAsset;

    @Column("boolean")
    isDefault: boolean;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}