import { Injectable } from '@nestjs/common';
import { FakeProductService } from 'src/fake-data/fake-product.service';

@Injectable()
export class ProductService {

    constructor(private fakeProductService: FakeProductService){}
    
    getProducts(page: number, limit: number, all: boolean) {
        return this.fakeProductService.getProducts(page, limit, all);
    }

    getProductById(productId: number) {
        return this.fakeProductService.getProductById(productId);
    }
}
