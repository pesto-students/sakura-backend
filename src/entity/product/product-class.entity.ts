import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LoggerModel } from "../logger.model";
import { Product } from "./product.entity";
import { Review } from "./review.entity";
import { SubCategory } from "./sub-category.entity";


export enum ProductClassStatusEnum {
    active = "active",
    inactive = "inactive"
}

@Entity("product_class")
export class ProductClass {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "varchar", length: 30 })
    name: string;

    @Column({ type: "varchar", length: 500 })
    description: string;

    @Column({ type: "varchar", length: 30 })
    brandName: string;

    @Column({ type: "tinyint", unsigned: true })
    rating: number;

    @Column({ type: "int", unsigned: true })
    subCategoryId: number;

    @ManyToOne(() => SubCategory, subCategory => subCategory.productClasses)
    @JoinColumn({ name: "subCategoryId" })
    subCategory: SubCategory;

    @OneToMany(() => Product, product => product.productClass)
    products: Product[];

    @OneToMany(() => Review, review => review.productClass)
    reviews: Review[];

    @Column({ type: "enum", enum: ProductClassStatusEnum })
    status: ProductClassStatusEnum;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}