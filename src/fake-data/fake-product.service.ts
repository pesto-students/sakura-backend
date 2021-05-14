import { Injectable } from '@nestjs/common';
import { products } from "./data/products";

@Injectable()
export class FakeProductService {
  getProducts(page = 0, limit = 5, all = false) {
    if(all) return products;
    return products.slice((page * limit), limit);
  }
}
