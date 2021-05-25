import { convertDateTimeToSqlFormat } from "../../utils/time.util";
import { Column, JoinColumn, ManyToOne } from "typeorm";
import { AppUser } from "./user/user.entity";

export class LoggerModel {

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdOn: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate:  "CURRENT_TIMESTAMP" })
    updatedOn: string;

    @Column({ type: "int", unsigned: true, nullable: true })
    createdById: number;

    @ManyToOne(() => AppUser)
    @JoinColumn({name: "createdById"})
    createdBy: AppUser;

    @Column({ type: "int", unsigned: true, nullable: true })
    updatedById: number;

    @ManyToOne(() => AppUser)
    @JoinColumn({name: "updatedById"})
    updateddBy: AppUser;
}