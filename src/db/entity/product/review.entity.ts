import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { ProductClass } from "./product-class.entity";

export enum ReviewStatusEnum {
    active = "active",
    inactive = "inactive"
}


@Entity("review")
export class Review {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "longtext" })
    description: string;

    @Column({ type: "tinyint", unsigned: true })
    rating: number;

    @Column({ type: "int", unsigned: true })
    productClassId: number;

    @ManyToOne(() => ProductClass, productClass => productClass.reviews)
    @JoinColumn({ name: "productClassId" })
    productClass: ProductClass;

    @Column({ type: "enum", enum: ReviewStatusEnum, default: ReviewStatusEnum.active })
    status: ReviewStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}