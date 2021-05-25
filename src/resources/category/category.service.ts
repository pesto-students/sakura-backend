import { Injectable } from '@nestjs/common';
import { FakeCategoryService } from '../fake-data/fake-category.service';

@Injectable()
export class CategoryService {
    constructor(private fakeCategoryService: FakeCategoryService) {}

    getAllCategories(matchString: string) {
        return this.fakeCategoryService.getAllCategories(matchString);
    }

    getCategoryById(categoryId: number) {
        return this.fakeCategoryService.getCategoryById(categoryId);
    }

    getProductsByCategoryId(categoryId: number){
        return this.fakeCategoryService.getProductByCategories(categoryId);
    }

    getTopCategories() {
        return this.fakeCategoryService.getTopCategories();
    }
}
