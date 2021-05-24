import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum UserGenderEnum {
    male = "male",
    female = "female"
}

@Entity("user_profile")
export class UserProfile {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    userId: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column({ type: "enum", enum: UserGenderEnum, default: UserGenderEnum.male })
    gender: string;

    @Column("date")
    dateOfBirth: string;

    @Column({type: "varchar", length: 400})
    address: string;

    @Column({type: "varchar", length: 15})
    mobile: string;

    @Column({ type: "int", unsigned: true })
    profileImageId: number;

    @Column({ type: "int", unsigned: true })
    cityId: number;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}