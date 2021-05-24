import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum ProductClassStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("product_class")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 30 })
    name: string;

    @Column({ type: "varchar", length: 500 })
    description: string;

    @Column({ type: "varchar", length: 30 })
    brandName: string;

    @Column({ type: "tinyint", unsigned: true })
    rating: number;

    @Column({ type: "int", unsigned: true })
    categoryId: number;

    @Column({ type: "int", unsigned: true })
    subCategoryId: number;

    @Column({type: "enum", enum: ProductClassStatusEnum })
    status: ProductClassStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}