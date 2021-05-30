import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product/product.entity';
import { SubCategory } from 'src/db/entity/product/sub-category.entity';
import { productsData } from 'src/db/seeder/data/product';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoryService {

    constructor(@InjectRepository(SubCategory)
    private subCategoryRepository: Repository<SubCategory>) { }

    async getProductsInSubCategory(subCategoryId: number, page = 0, limit = 0, sortOptions?: any) {
        const offsetVal = page ? page * limit : 0;
        const products = await this.subCategoryRepository.createQueryBuilder("subCategory")
            .innerJoin("subCategory.category", "category")
            .innerJoin("subCategory.productClasses", "productClass")
            .innerJoin("productClass.products", "product")
            .select(["subCategory.id"])
            .addSelect(["category.id"])
            .addSelect(["productClass.id"])
            .addSelect(["product.id", "product.productClassId"])
            .groupBy("product.productClassId")
            .orderBy("product.productClassId")
            .offset(offsetVal)
            .limit(limit)
            .getMany();


        return products;

    }

}