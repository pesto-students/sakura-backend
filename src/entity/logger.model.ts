import { convertDateTimeToSqlFormat } from "../utils/time.util";
import { Column, JoinColumn, ManyToOne } from "typeorm";
import { AppUser } from "./user/user.entity";

export class LoggerModel {

    @Column({ type: "timestamp", default: () => `"${convertDateTimeToSqlFormat()}"` })
    createdOn: string;

    @Column({ type: "datetime", default: () => `"${convertDateTimeToSqlFormat()}"` })
    updatedOn: string;

    @Column({ type: "int", unsigned: true })
    createdById: number;

    @ManyToOne(() => AppUser)
    @JoinColumn({name: "createdById"})
    createdBy: AppUser;

    @Column({ type: "int", unsigned: true })
    updatedBy: number;
}