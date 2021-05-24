import { Injectable } from '@nestjs/common';
import { productsData } from "./data/product";

@Injectable()
export class FakeProductService {

  getProducts(page = 0, limit = 5, all = false) {
    if (all) return productsData;
    return productsData.slice((page * limit), limit);
  }

  getProductById(productId: number) {
    const allProductInCategories = productsData.find((product: any) => product.id == productId);
    return allProductInCategories;
  }
}
