import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppSettingSeederService } from './app-setting-seeder.service';
import { AppUserSeederService } from './app-user-role-seeder.service';
import { CityStateSeederService } from './city-state-seeder.service';
import { ProductSeederService } from './product-seeder.service';
import { PromoSeederService } from './promotion-seeder.service';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        private appSettingSeederService: AppSettingSeederService,
        private cityStateSeederService: CityStateSeederService,
        private productSeederService: ProductSeederService,
        private promoSeederService: PromoSeederService,
        private userSeederService: AppUserSeederService,
    ) { }

    async onModuleInit() {
        const isSeeded = await this.appSettingSeederService.isDbSeeded();
        if (!isSeeded) {

            // Roles and user seeded below
            await this.userSeederService.seedAppRole();
            await this.userSeederService.seedAppUser();

            // Seed all below
            await this.appSettingSeederService.setPasswordEncryptionKey();
            await this.cityStateSeederService.seedState();
            await this.cityStateSeederService.seedCity();
            // products seeded below
            await this.productSeederService.seedCategory();
            await this.productSeederService.seedSubCategory();
            await this.productSeederService.seedProductClass();
            await this.productSeederService.seedPublicAsset();
            await this.productSeederService.seedInventory();
            await this.productSeederService.seedProduct();
            await this.productSeederService.seedProductAsset();

            // promos seeded below:
            await this.promoSeederService.seedDiscount();
            await this.promoSeederService.seedEventPromo();
            await this.promoSeederService.seedEventCollection();

            // all seeded commit
            await this.appSettingSeederService.setSeeded();
        }
    }
}