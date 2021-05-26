import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppSettingSeederService } from './app-setting-seeder.service';
import { CityStateSeederService } from './city-state-seeder.service';
import { ProductSeederService } from './product-seeder.service';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        private appSettingSeederService: AppSettingSeederService,
        private cityStateSeederService: CityStateSeederService,
        private productSeederService: ProductSeederService
    ) { }

    async onModuleInit() {
        const isSeeded = await this.appSettingSeederService.isDbSeeded();
        if (!isSeeded) {
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

            // all seeded commit
            await this.appSettingSeederService.setSeeded();
        }
    }
}