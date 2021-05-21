import { Injectable } from '@nestjs/common';
import { products } from "./data/products";
import { categories } from "./data/categories";


@Injectable()
export class FakeCategoryService {

    getAllCategories(matchString: string) {
        if(matchString) {
            return categories.filter(category => category.title.includes(matchString));
        } else return categories;
    }

    getCategoryById(categoryId: number) {
        return categories.find(category => category.id === categoryId);
    }

    getProductByCategories(categoryId: number, page = 0, limit = 5, all = false) {
        const allProductInCategories = products.filter(val => val.categoryId === categoryId);
        if (all) return allProductInCategories;
        return allProductInCategories.slice((page * limit), limit);
    }

    getTopCategories() {
        const allTopCategories = categories.filter(category => category.isTopCategory);
        return allTopCategories;
    }

}
