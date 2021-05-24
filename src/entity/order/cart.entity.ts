import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum CartStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("cart")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    userId: number;

    @Column({type: "enum", enum: CartStatusEnum, default: CartStatusEnum.active})
    status: CartStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}