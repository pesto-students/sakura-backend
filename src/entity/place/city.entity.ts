import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


@Entity("city")
export class City {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "varchar", length: 30})
    name: string;

    @Column({ type: "int", unsigned: true })
    stateId: number;

    @ManyToOne(() => State)

    @Column(type => LoggerModel)
    logger: LoggerModel;
}