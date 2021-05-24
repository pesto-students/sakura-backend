import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


@Entity("category")
export class Category {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    parentId: number;

    @Column({ type: "varchar", length: 80 })
    name: string;

    @Column({ type: "varchar", length: 150 })
    description: string;

    @Column(type => LoggerModel)
    logger: LoggerModel;

}