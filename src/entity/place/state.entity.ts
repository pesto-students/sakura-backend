import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


@Entity("state")
export class State {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 30})
    name: string;

    @Column({type: "varchar", length: 5})
    abbreveation: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}