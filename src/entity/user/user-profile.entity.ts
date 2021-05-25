import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { City } from "../place/city.entity";
import { PublicAsset } from "../public-assets.entity";
import { User } from "./user.entity";


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

    @OneToOne(() => User)
    @JoinColumn({name: "userId"})
    user: User;

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

    @OneToOne(() => PublicAsset)
    @JoinColumn({name: "profileImageId"})
    profileImage: PublicAsset;

    @Column({ type: "int", unsigned: true })
    cityId: number;

    @ManyToOne(() => City)
    @JoinColumn({name: "cityId"})
    city: City;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}