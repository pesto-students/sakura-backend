import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Category } from "./category.entity";
import { ProductClass } from "./product-class.entity";
import { Product } from "./product.entity";


@Entity("sub_category")
export class SubCategory {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "int", unsigned: true })
    categoryId: number;

    @ManyToOne(() => Category, category => category.subCategories)
    category: Category;

    @Column({ type: "varchar", length: 80 })
    name: string;

    @Column({ type: "longtext" })
    description: string;

    @OneToMany(() => ProductClass, productClass => productClass.subCategory)
    productClasses: ProductClass[];

    @Column(type => LoggerModel)
    logger: LoggerModel;

}