import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product/product.entity';
import { Discount } from 'src/db/entity/promo/discount.entity';
import { EventCollection } from 'src/db/entity/promo/event-collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product)
    private productRepository: Repository<Product>) { }

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

    async getProductById(productId: number, discountId?: number) {
        let commonQuery = this.productRepository.createQueryBuilder("product")
            .innerJoin("product.productClass", "productClass")
            .innerJoin("product.inventory", "inventory")
            .innerJoin("product.productAssets", "productAsset")
            .innerJoin("productAsset.publicAsset", "publicAsset")
            .select(["product.id", "product.name", "product.description", "product.color", "product.size", "product.status"])
            .addSelect(["productClass.brandName", "productClass.rating", "productClass.status"])
            .addSelect(["inventory.costPrice", "inventory.retailPrice"])
            .addSelect(["productAsset.publicAsset", "productAsset.isDefault"])
            .addSelect(["publicAsset.fileType", "publicAsset.uri"])
            .where("product.id = :productId", { productId: productId });

        if (discountId) {
            commonQuery = commonQuery
                .leftJoin("product.eventCollection", "eventCollection", `product.id = eventCollection.productId AND eventCollection.discountId = ${discountId}`)
                .leftJoin("eventCollection.discount", "discount")
                .addSelect(["eventCollection.id"])
                .addSelect(["discount.id", "discount.discountRate"])
        }

        const products = await commonQuery.getMany();

        return products;
    }

}
