import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";

export enum ReviewStatusEnum {
    active = "active",
    inactive = "inactive"
}


@Entity("review")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "varchar", length: 50 })
    name: string;

    @Column({type: "varchar", length: 500 })
    description: string;

    @Column({type: "tinyint", unsigned: true })
    rating: number;

    @Column({ type: "int", unsigned: true })
    productClassId: number;

    @Column({type: "enum", enum: ReviewStatusEnum, default: ReviewStatusEnum.active})
    status: ReviewStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}