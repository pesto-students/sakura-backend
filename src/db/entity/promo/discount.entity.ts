import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum DiscountStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("discount")
export class Discount {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 20 })
    name: string;

    @Column({ type: "varchar", length: 10 })
    coupon: string;

    @Column({ type: "longtext" })
    description: string;

    @Column({ type: "enum", enum: DiscountStatusEnum, default: DiscountStatusEnum.active })
    status: DiscountStatusEnum;

    @Column({ type: "decimal", precision: 5, scale: 2, unsigned: true })
    discountRate: number;

    @Column({ type: "int", unsigned: true })
    minimumOrderValue: number;

    @Column({ type: "int", unsigned: true })
    minimumOrderQuantity: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}
