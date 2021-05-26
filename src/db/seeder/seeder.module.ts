import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppSetting } from '../entity/app-setting.entity';
import { City } from '../entity/place/city.entity';
import { State } from '../entity/place/state.entity';
import { Category } from '../entity/product/category.entity';
import { Favorite } from '../entity/product/favorite.entity';
import { Inventory } from '../entity/product/inventory.entity';
import { ProductAsset } from '../entity/product/product-asset.entity';
import { ProductClass } from '../entity/product/product-class.entity';
import { Product } from '../entity/product/product.entity';
import { SubCategory } from '../entity/product/sub-category.entity';
import { PublicAsset } from '../entity/public-assets.entity';
import { AppRole } from '../entity/user/role.entity';
import { AppUser } from '../entity/user/user.entity';
import { AppSettingSeederService } from './services/app-setting-seeder.service';
import { CityStateSeederService } from './services/city-state-seeder.service';
import { ProductSeederService } from './services/product-seeder.service';
import { SeederService } from './services/seeder.service';

const entities = [AppUser, AppRole, AppSetting, City, State, PublicAsset,
    Category, SubCategory, Favorite, Product, ProductClass, ProductAsset, Inventory]

@Module({
    providers: [SeederService, AppSettingSeederService, CityStateSeederService, ProductSeederService],
    imports: [TypeOrmModule.forFeature(entities)],
    exports: [TypeOrmModule, SeederService]
})
export class SeederModule { }
