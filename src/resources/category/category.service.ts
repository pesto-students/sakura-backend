import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/db/entity/product/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category)
    private categoryService: Repository<Category>) { }

    async searchCategoriesByKey(matchString = "") {
        const allCategories = await this.categoryService.createQueryBuilder("category")
            .innerJoin("category.subCategories", "subCategory")
            .select(["category.id", "category.name"])
            .addSelect(["subCategory.id", "subCategory.name"])
            .where("LOWER(category.name) like :matchString", { matchString: `${matchString.toLowerCase()}%` })
            .orWhere("LOWER(subCategory.name) like :matchString", { matchString: `${matchString.toLowerCase()}%` })
            .limit(10)
            .orderBy("subCategory.name")
            .getMany();
        return allCategories;
    }

    getCategoryById(categoryId: number) {
        // return this.fakeCategoryService.getCategoryById(categoryId);
    }

    getProductsByCategoryId(categoryId: number) {
        // return this.fakeCategoryService.getProductByCategories(categoryId);
    }

    getTopCategories() {
        // return this.fakeCategoryService.getTopCategories();
    }
}
