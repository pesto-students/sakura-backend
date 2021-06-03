import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product, ProductStatusEnum } from 'src/db/entity/product/product.entity';
import { Discount, DiscountStatusEnum } from 'src/db/entity/promo/discount.entity';
import { EventCollection, EventProductStatusEnum } from 'src/db/entity/promo/event-collection.entity';
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
                .leftJoin("product.eventCollection", "eventCollection", `eventCollection.discountId = ${discountId} AND eventCollection.status="${EventProductStatusEnum.active}"`)
                .leftJoin("eventCollection.discount", "discount", `discount.status="${DiscountStatusEnum.active}"`)
                .addSelect(["eventCollection.id"])
                .addSelect(["discount.id", "discount.discountRate"])
        }

        const products = await commonQuery.getOne();

        return products;
    }


    async getProductOptions(productId: number) {
        const sameClassProducts = await this.productRepository.createQueryBuilder("product")
            .select(["product.id", "product.color", "product.size"])
            .where(qb => {
                const subQuery = qb.subQuery()
                    .select("prd.productClassId")
                    .from(Product, "prd")
                    .where("prd.id = :prdId", { prdId: productId })
                    .getQuery()
                return subQuery;
            })
            .andWhere(`product.status = "${ProductStatusEnum.active}"`)
            .groupBy("color, size")
            .getMany();
        return this.createOptionsMap(sameClassProducts);

    }

    async getSimilarProducts(productId: number) {

    }



    private createOptionsMap(products: productSizeColor[]) {
        const uniqueColors = [];
        const uniqueSizes = [];
        const colorMap = {};
        const sizeMap = {};

        function addIfUnique(obj, key, val, unqArr) {
            if (obj) {
                if (key in obj) {
                    obj[key].push(val);
                } else {
                    unqArr.push(key);
                    obj[key] = [val];
                }
            }
        }

        products.forEach(product => {
            addIfUnique(colorMap, product.color, { size: product.size, productId: product.id }, uniqueColors);
            addIfUnique(sizeMap, product.size, { color: product.color, productId: product.id }, uniqueSizes);
        })

        return { colors: uniqueColors, sizes: uniqueSizes, sizeMap, colorMap };
    }

}


type productSizeColor = { id: number, color: string, size: string }