import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductClass } from 'src/db/entity/product/product-class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductClassService {

    constructor(@InjectRepository(ProductClass)
    private productClassRepository: Repository<ProductClass>) { }

    async getAllProductsOfSimilarClass(productId: number) {
        // const pro
        // const products = await this.productClassRepository.find({ where: })
    }
}