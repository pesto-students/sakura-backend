import { convertDateTimeToSqlFormat } from "src/utils/time.util";
import { Column } from "typeorm";

export class LoggerModel {

    @Column({ type: "timestamp", default: () => convertDateTimeToSqlFormat() })
    createdOn: string;

    @Column({ type: "datetime", default: () => convertDateTimeToSqlFormat() })
    updatedOn: string;

    @Column({ type: "int", unsigned: true })
    createdBy: number;

    @Column({ type: "int", unsigned: true })
    updatedBy: number;
}