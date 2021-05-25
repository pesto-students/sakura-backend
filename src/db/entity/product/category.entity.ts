import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { SubCategory } from "./sub-category.entity";


@Entity("category")
export class Category {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 80 })
    name: string;

    @Column({ type: "varchar", length: 150 })
    description: string;

    @OneToMany(() => SubCategory, subCategory => subCategory.category)
    subCategories: SubCategory[];

    @Column(type => LoggerModel)
    logger: LoggerModel;

}