import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";

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

    @Column({type: "enum", enum: FavoriteStatusEnum, default: FavoriteStatusEnum.active})
    status: FavoriteStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}