import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppSettingSeederService } from './app-setting-seeder.service';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        private appSettingSeederService: AppSettingSeederService
    ) { }

    async onModuleInit() {
        const isSeeded = await this.appSettingSeederService.isDbSeeded();
        if (!isSeeded) {
            // Seed all below
            await this.appSettingSeederService.setPasswordEncryptionKey();
            await this.appSettingSeederService.setSeeded();
        }
    }
}