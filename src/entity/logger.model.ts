import { convertDateTimeToSqlFormat } from "src/utils/time.util";
import { Column, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user/user.entity";

export class LoggerModel {

    @Column({ type: "timestamp", default: () => convertDateTimeToSqlFormat() })
    createdOn: string;

    @Column({ type: "datetime", default: () => convertDateTimeToSqlFormat() })
    updatedOn: string;

    @Column({ type: "int", unsigned: true })
    createdById: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "createdById"})
    createdBy: User;

    @Column({ type: "int", unsigned: true })
    updatedBy: number;
}