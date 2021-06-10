import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/db/entity/product/category.entity';
import { Inventory } from 'src/db/entity/product/inventory.entity';
import { ProductAsset } from 'src/db/entity/product/product-asset.entity';
import { ProductClass } from 'src/db/entity/product/product-class.entity';
import { Product } from 'src/db/entity/product/product.entity';
import { SubCategory } from 'src/db/entity/product/sub-category.entity';
import { PublicAsset } from 'src/db/entity/public-assets.entity';
import { Repository } from 'typeorm';
import { categoryData } from '../data/category';
import { inventoryData } from '../data/inventory';
import { productsData } from '../data/product';
import { productAssetsData } from '../data/product_assets';
import { productClassData } from '../data/product_class';
import { publicAssetData } from '../data/public_assets';
import { subCategoryData } from '../data/sub-category';

@Injectable()
export class ProductSeederService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
        @InjectRepository(SubCategory)
        private subCategoryRepository: Repository<SubCategory>,
        @InjectRepository(ProductClass)
        private productClassRepository: Repository<ProductClass>,
        @InjectRepository(PublicAsset)
        private publicAssetRepository: Repository<PublicAsset>,
        @InjectRepository(ProductAsset)
        private productAssetRepository: Repository<ProductAsset>,
        @InjectRepository(Inventory)
        private inventoryRepository: Repository<Inventory>,
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }


    async seedCategory() {
        try {
            const allPromises = categoryData.map(category => {
                const newCategory = new Category();
                newCategory.id = parseInt(category.id);
                newCategory.name = category.name;
                newCategory.description = category.description;
                return this.categoryRepository.save(newCategory);
            });
            await Promise.all(allPromises);
            console.log("seeded category");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedSubCategory() {
        try {
            const allPromises = subCategoryData.map(subCategory => {
                const newSubCategory = new SubCategory();
                newSubCategory.id = parseInt(subCategory.id);
                newSubCategory.name = subCategory.name;
                newSubCategory.description = subCategory.description;
                newSubCategory.categoryId = parseInt(subCategory.categoryId);
                return this.subCategoryRepository.save(newSubCategory);
            });
            await Promise.all(allPromises);
            console.log("seeded subcategory");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedProductClass() {
        try {
            const allPromises = productClassData.map(productClass => {
                const newProductClass = new ProductClass();
                newProductClass.id = parseInt(productClass.id);
                newProductClass.name = productClass.name;
                newProductClass.description = productClass.description;
                newProductClass.brandName = productClass.brandName;
                newProductClass.status = productClass.status;
                newProductClass.subCategoryId = parseInt(productClass.subCategoryId);
                newProductClass.rating = parseInt(productClass.rating);

                return this.productClassRepository.save(newProductClass);
            });
            await Promise.all(allPromises);
            console.log("seeded productClass");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedPublicAsset() {
        try {
            const allPromises = publicAssetData.map(publicAsset => {
                const newPublicAsset = new PublicAsset();
                newPublicAsset.id = parseInt(publicAsset.id);
                newPublicAsset.fileName = publicAsset.fileName;
                newPublicAsset.fileType = publicAsset.fileType;
                newPublicAsset.uri = publicAsset.uri;
                newPublicAsset.attributes = publicAsset.attributes;

                return this.publicAssetRepository.save(newPublicAsset);
            });
            await Promise.all(allPromises);
            console.log("seeded publicAsset");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedInventory() {
        try {
            const allPromises = inventoryData.map(inventory => {
                const newInventory = new Inventory();
                newInventory.id = parseInt(inventory.id);
                newInventory.costPrice = parseFloat(inventory.costPrice) || 0;
                newInventory.retailPrice = parseFloat(inventory.retailPrice) || 0;
                newInventory.initialStock = parseInt(inventory.initialStock) || 0;
                newInventory.itemsLeft = parseInt(inventory.itemsLeft) || 0;

                return this.inventoryRepository.save(newInventory);
            });
            await Promise.all(allPromises);
            console.log("seeded inventory");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedProduct() {
        try {
            const allPromises = productsData.map(product => {
                const newProduct = new Product();
                newProduct.id = parseInt(product.id);
                newProduct.name = product.name;
                newProduct.description = product.description;
                newProduct.color = product.color;
                newProduct.size = product.size;
                newProduct.productClassId = parseInt(product.productClassId);
                newProduct.otherAttributes = product.otherAttributes;
                newProduct.status = product.status;
                newProduct.inventoryId = parseInt(product.inventoryId);

                return this.productRepository.save(newProduct);
            });
            await Promise.all(allPromises);
            console.log("seeded product");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedProductAsset() {
        try {
            const allPromises = productAssetsData.map(productAsset => {
                const newProductAsset = new ProductAsset();
                newProductAsset.id = parseInt(productAsset.id);
                newProductAsset.name = productAsset.name;
                newProductAsset.description = productAsset.description;
                newProductAsset.assetId = parseInt(productAsset.assetId);
                newProductAsset.productId = parseInt(productAsset.productId);
                newProductAsset.isDefault = productAsset.isDefault;

                return this.productAssetRepository.save(newProductAsset);
            });
            await Promise.all(allPromises);
            console.log("seeded productAsset");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}