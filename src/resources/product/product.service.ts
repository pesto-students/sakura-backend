import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    constructor() { }

    getProducts(page: number, limit: number, all: boolean) {
        // return this.fakeProductService.getProducts(page, limit, all);
    }

    getProductById(productId: number) {
        // return this.fakeProductService.getProductById(productId);
    }
}
