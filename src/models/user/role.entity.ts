import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum RoleNameEnum {
    admin = "admin",
    customer = "customer"
}

@Entity("role")
export class User {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({type: "enum", enum: RoleNameEnum, default: RoleNameEnum.customer})
    roleName: string;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}