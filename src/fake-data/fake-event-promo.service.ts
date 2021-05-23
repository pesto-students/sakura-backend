import { Injectable } from '@nestjs/common';
import { publicAssetData } from "./data/public_assets";
import { eventCollectionData } from "./data/event_collection";
import { discountData } from "./data/discount";
import { productAssetsData } from "./data/product_assets";
import { eventPromoData } from "./data/event_promo";
import { productsData } from "./data/product";
import { inventoryData } from "./data/inventory";
import { productClassData } from "./data/product_class";

@Injectable()
export class FakeEventPromoService {

    getEventPromos() {
        return eventPromoData.map(promo => {
            const carousalImage = publicAssetData.find((asset: any) => asset.id == promo["carouselImageId"]);
            if (carousalImage) {
                promo = Object.assign({}, promo, {
                    carousalImage
                });
            }

            let eventCollections = eventCollectionData.filter((collection: any) => collection.eventPromoId == promo["id"]);
            if (eventCollections.length) {
                eventCollections = eventCollections.map(collection => {
                    let discount = discountData.find((ds: any) => ds.id == collection["discountId"])
                    if(discount) {
                        collection = Object.assign({}, collection, {discount});
                    }
                    let product: any = productsData.find((product: any) => product.id == collection["productId"]);
                    if (product) {
                        // productClass
                        const productClass = productClassData.find(p => p.id == product["productClassId"]);
                        if(productClass){
                            product = Object.assign({}, product, {productClass});
                        }
                        // productInventory
                        const inventory = inventoryData.find(i => i.id == product["inventoryId"])
                        if(inventory) {
                            product = Object.assign({}, product, {inventory});
                        }
                        // productAssets attached
                        let productAssets = productAssetsData.filter((productAsset: any) => productAsset.productId == collection["productId"]);
                        if (productAssets.length) {
                            productAssets = productAssets.map(productAsset => {
                                let asset = publicAssetData.find((publicAsset: any) => publicAsset.id == productAsset["assetId"]);
                                productAsset = Object.assign({}, productAsset, {asset});
                                return productAsset;
                            });
                            product = Object.assign({}, product, {productAssets});
                        }
                        collection = Object.assign({}, collection, {product});
                    }
                    return collection;
                });
                promo = Object.assign({}, promo, {
                    eventCollections
                });
            }
            return promo;
        })
    }



}
