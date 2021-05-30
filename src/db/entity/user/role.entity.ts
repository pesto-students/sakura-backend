import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";


export enum RoleNameEnum {
    admin = "admin",
    customer = "customer"
}

@Entity("app_role")
export class AppRole {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "enum", enum: RoleNameEnum, default: RoleNameEnum.customer })
    name: RoleNameEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}