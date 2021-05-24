import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum ProductStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("inventory")
export class Inventory {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "decimal", precision: 10, scale: 2, unsigned: true })
    costPrice: number;

    @Column({type: "decimal", precision: 10, scale: 2, unsigned: true})
    retailPrice: number;

    @Column({type: "int", unsigned: true})
    initialStock: number;

    @Column({type: "int", unsigned: true})
    itemsLeft: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}
