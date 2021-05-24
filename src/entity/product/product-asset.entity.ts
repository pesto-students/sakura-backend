import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


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

    @Column({ type: "int", unsigned: true })
    assetId: number;

    @Column("boolean")
    isDefault: boolean;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}