import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    constructor() { }

    getAllCategories(matchString: string) {
        // return this.fakeCategoryService.getAllCategories(matchString);
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
