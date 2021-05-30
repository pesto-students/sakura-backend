import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { State } from "./state.entity";


@Entity("city")
export class City {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "varchar", length: 30})
    name: string;

    @Column({ type: "int", unsigned: true })
    stateId: number;

    @ManyToOne(() => State, state => state.cities)
    @JoinColumn({name: "stateId"})
    state: State;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}