import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum ProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("product")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 30 })
    name: string;

    @Column({ type: "varchar", length: 500 })
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

    @Column({ type: "int", unsigned: true })
    inventoryId: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}