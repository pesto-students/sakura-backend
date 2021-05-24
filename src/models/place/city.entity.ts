import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


@Entity("city")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "varchar", length: 30})
    name: string;

    @Column({ type: "int", unsigned: true })
    stateId: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}