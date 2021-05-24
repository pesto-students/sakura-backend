import { Column } from "typeorm";

export class LoggerModel {

    @Column({type: "datetime"})
    createdOn: string;

    @Column({type: "datetime"})
    updatedOn: string;

    @Column()
    createdBy: number;

    @Column()
    updatedBy: number;
} 