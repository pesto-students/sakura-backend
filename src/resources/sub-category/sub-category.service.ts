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
            .innerJoin("product.inventory", "inventory")
            .innerJoin("product.productAssets", "productAsset")
            .innerJoin("productAsset.publicAsset", "publicAsset")
            .select(["subCategory.id"])
            .addSelect(["category.id"])
            .addSelect(["productClass.id", "productClass.brandName", "productClass.rating", "productClass.status"])
            .addSelect(["product.id", "product.name", "product.description", "product.color", "product.size", "product.status"])
            .addSelect(["inventory.costPrice", "inventory.retailPrice"])
            .addSelect(["productAsset.publicAsset", "productAsset.isDefault"])
            .addSelect(["publicAsset.fileType", "publicAsset.uri"])
            .groupBy("product.productClassId")
            .orderBy("product.productClassId")
            .where("subCategory.id=:subCategoryId", { subCategoryId })
            .offset(offsetVal)
            .limit(limit)
            .getMany();


        return products;

    }

}