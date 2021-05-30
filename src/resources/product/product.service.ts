import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product)
    private productRepository: Repository<Product>,) { }

    async getProducts(page?: number, limit?: number, all?: boolean) {
        const products = await this.productRepository.createQueryBuilder("product")
            .innerJoin("product.productClass", "productClass")
            .innerJoin("product.inventory", "inventory")
            .innerJoin("product.productAssets", "productAsset")
            .innerJoin("productAsset.publicAsset", "publicAsset")
            .select(["product.id", "product.name", "product.description", "product.color", "product.size", "product.status"])
            .addSelect(["productClass.brandName", "productClass.rating", "productClass.status"])
            .addSelect(["inventory.costPrice", "inventory.retailPrice"])
            .addSelect(["productAsset.publicAsset", "productAsset.isDefault"])
            .addSelect(["publicAsset.fileType", "publicAsset.uri"])
            .skip(page || undefined)
            .take(limit || undefined)
            .getMany();

        return products;
    }

    async getProductById(productId: number) {
        const products = await this.productRepository.createQueryBuilder("product")
            .innerJoin("product.productClass", "productClass")
            .innerJoin("product.inventory", "inventory")
            .innerJoin("product.productAssets", "productAsset")
            .innerJoin("productAsset.publicAsset", "publicAsset")
            .select(["product.id", "product.name", "product.description", "product.color", "product.size", "product.status"])
            .addSelect(["productClass.brandName", "productClass.rating", "productClass.status"])
            .addSelect(["inventory.costPrice", "inventory.retailPrice"])
            .addSelect(["productAsset.publicAsset", "productAsset.isDefault"])
            .addSelect(["publicAsset.fileType", "publicAsset.uri"])
            .where("product.id = :productId", { productId: productId })
            .getMany();

        return products;
    }

}
