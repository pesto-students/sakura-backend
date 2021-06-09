import { AppSetting } from "./app-setting.entity";
import { CartItem } from "./order/cart-item.entity";
import { Cart } from "./order/cart.entity";
import { Order } from "./order/order.entity";
import { City } from "./place/city.entity";
import { State } from "./place/state.entity";
import { Category } from "./product/category.entity";
import { Favorite } from "./product/favorite.entity";
import { Inventory } from "./product/inventory.entity";
import { ProductAsset } from "./product/product-asset.entity";
import { ProductClass } from "./product/product-class.entity";
import { Product } from "./product/product.entity";
import { Review } from "./product/review.entity";
import { SubCategory } from "./product/sub-category.entity";
import { Discount } from "./promo/discount.entity";
import { EventCollection } from "./promo/event-collection.entity";
import { EventPromo } from "./promo/event-promo.entity";
import { PublicAsset } from "./public-assets.entity";
import { AppRole } from "./user/role.entity";
import { UserProfile } from "./user/user-profile.entity";
import { AppUser } from "./user/user.entity";

const entities = [
    CartItem,
    Cart,
    Order,
    City,
    State,
    Category,
    Favorite,
    Inventory,
    ProductAsset,
    ProductClass,
    Product,
    Review,
    SubCategory,
    Discount,
    EventCollection,
    EventPromo,
    AppRole,
    UserProfile,
    AppUser,
    AppSetting,
    PublicAsset
]


export default entities;