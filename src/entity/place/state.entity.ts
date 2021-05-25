import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { City } from "./city.entity";


@Entity("state")
export class State {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "varchar", length: 30})
    name: string;

    @Column({type: "varchar", length: 5})
    abbreveation: number;

    @OneToMany(() => City, city => city.state)
    cities: City[];

    @Column(type => LoggerModel)
    logger: LoggerModel;
}