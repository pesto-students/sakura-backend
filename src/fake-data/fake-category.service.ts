import { Injectable } from '@nestjs/common';
import { productsData } from "./data/product";
import { categoryData } from "./data/category";


@Injectable()
export class FakeCategoryService {

    getAllCategories(matchString: string) {
        if(matchString) {
            return categoryData.filter(category => category.title.includes(matchString));
        } else return categoryData;
    }

    getCategoryById(categoryId: number) {
        return categoryData.find(category => category.id === categoryId);
    }

    getProductByCategories(categoryId: number, page = 0, limit = 5, all = false) {
        const allProductInCategories = productsData.filter((val: any) => val.categoryId === categoryId);
        if (all) return allProductInCategories;
        return allProductInCategories.slice((page * limit), limit);
    }

    getTopCategories() {
        const allTopCategories = categoryData.filter(category => category.isTopCategory);
        return allTopCategories;
    }

}
